import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'macskapp';
  myForm = document.getElementById("myForm");

  
  
  ngOnInit() {
    
  }
}
