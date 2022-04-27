import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private router: Router) {}

  getShelters() {
    let endpoint = 'shelters';
    return this.http.get<any>(this.host + endpoint)
  }
  updateSpecie(id:number,shelter_name: string,shelter_zip: number,shelter_city: string,shelter_street_address: string,shelter_phone:string,shelter_website:string,shelter_facebook:string){
    let vData = {
      id: id,
      shelter_name: shelter_name,
      shelter_zip: shelter_zip,
      shelter_city: shelter_city,
      shelter_street_address:shelter_street_address,
      shelter_phone:shelter_phone,
      shelter_website:shelter_website,
      shelter_facebook:shelter_facebook
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
    let endpoint = 'species/'+ id;
    let url = this.host + endpoint;
    return this.http.put<any>(url, data, header);
  }
  postSpecie(shelter_name: string,shelter_zip: number,shelter_city: string,shelter_street_address: string,shelter_phone:string,shelter_website:string,shelter_facebook:string){
    let vData = {
      shelter_name: shelter_name,
      shelter_zip: shelter_zip,
      shelter_city: shelter_city,
      shelter_street_address:shelter_street_address,
      shelter_phone:shelter_phone,
      shelter_website:shelter_website,
      shelter_facebook:shelter_facebook
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
  deleteShelter(id: number) {
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

    let endpoint = 'shelters/';
    return this.http.delete<any>(this.host + endpoint + id, httpOption)
    .pipe(map( res => {
      return res;
    }))
  }
}
