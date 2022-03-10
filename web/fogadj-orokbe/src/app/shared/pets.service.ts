import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../pet'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
    
   }

  getPets(): Observable<Pet[]> {
    let endpoint = 'pets';
    let url = this.host + endpoint;
    return this.http.get<Pet[]>(url);
}
}
