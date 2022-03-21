import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './pet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private router: Router) {

  }

  getPets() {
    let endpoint = 'pets';
    return this.http.get<any>(this.host + endpoint)
  }

 

  postPets(name: string, breeds_id: number, age: number, gender: string, adopted: boolean, shelters_id: number, neutered: boolean){
    let vData = {
      name: name,
      breeds_id: breeds_id,
      age: age,
      gender: gender,
      adopted: adopted,
      shelters_id,
      neutered: neutered
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
    let endpoint = 'pets';
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, header);
  }

}
