import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { reduceEachLeadingCommentRange } from 'typescript';
import { AuthService } from '../app/shared/auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FogadjÖrökbe'
  loginForm !: FormGroup
  mobile = false;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  isAdmin() {
    return this.auth.isAdmin()
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    this.auth.login(username, password)
    .subscribe(res => {
      if (res.success) {
        localStorage.setItem('currentUser',
        JSON.stringify({token: res.data.token, name: res.data.user, admin: res.data.admin, user_id: res.data.user_id})
        );
        this.router.navigate(['main']);
      }else {
        alert("Hiba! A belépés sikertelen!")
      }
    })

  }

  logout(){
    this.auth.logout();
  }


}
