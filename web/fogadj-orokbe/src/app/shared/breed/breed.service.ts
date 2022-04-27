import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private router: Router) {}

  getBreeds() {
    let endpoint = 'breeds';
    return this.http.get<any>(this.host + endpoint)
  }
  updateBreed(id:number,bname: string){
    let vData = {
      bname: bname,
    }
    let data = JSON.stringify(vData);

    let udata:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(udata);
    let token = currentUser.token;

    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let header = {
      headers: headerObj
    }
    let endpoint = 'breeds/'+ id;
    let url = this.host + endpoint;
    return this.http.put<any>(url, data, header);
  }
  postBreed(bname: string, species_id:number){
    let vData = {
      bname: bname,
      species_id: species_id
    }
    let data = JSON.stringify(vData);

    let udata:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(udata);
    let token = currentUser.token;

    let headerObj = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    let header = {
      headers: headerObj
    }
    let endpoint = 'breeds';
    let url = this.host + endpoint;
    return this.http.post<any>(url, vData, header);
  }
  deleteBreed(id: number) {
    let data:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;
    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    const httpOption = {
      headers: headerObj
    };

    let endpoint = 'breeds/';
    return this.http.delete<any>(this.host + endpoint + id, httpOption)
    .pipe(map( res => {
      return res;
    }))
  }
}

