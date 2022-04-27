import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private router: Router) {

  }

  newAdoption(date: string, pets_id: number, user_id: number){
    let vData = {
      date: date,
      pets_id: pets_id,
      users_id: user_id
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
    let endpoint = 'adoptions';
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, header);
  }
}
