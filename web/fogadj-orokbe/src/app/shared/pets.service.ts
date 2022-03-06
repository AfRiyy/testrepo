import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
    
   }

  getPets() {    
    let endpoint = 'pets';
    let url = this.host + endpoint;
 
    return this.http.get<any>(url);
  }
}
