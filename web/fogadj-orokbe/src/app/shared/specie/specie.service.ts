import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  host = 'http://localhost:8000/api/';
constructor(private http: HttpClient, private router: Router) {}

  getSpecies() {
    let endpoint = 'species';
    return this.http.get<any>(this.host + endpoint)
  }
  updateSpecie(id:number,sname: string){
    let vData = {
      sname: sname,
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
    let endpoint = 'pets/'+ id;
    let url = this.host + endpoint;
    return this.http.put<any>(url, data, header);


  }
  postSpecie(sname: string){
    let vData = {
      sname: sname
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
    let endpoint = 'species';
    let url = this.host + endpoint;
    return this.http.post<any>(url, vData, header);
  }

  deleteSpecies(id: number) {
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

    let endpoint = 'species/';
    return this.http.delete<any>(this.host + endpoint + id, httpOption)
    .pipe(map( res => {
      return res;
    }))
  }
}
