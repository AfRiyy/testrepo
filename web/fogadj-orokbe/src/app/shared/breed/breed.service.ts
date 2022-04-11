import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private router: Router) {

  }

  getBreeds() {
    let endpoint = 'breeds';
    return this.http.get<any>(this.host + endpoint)
  }

}

