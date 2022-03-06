import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem('currentUser') === null){
      return false;
    }else{
      return true;
    };
  }
}
