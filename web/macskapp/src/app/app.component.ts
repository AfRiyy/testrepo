import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'macskapp';
 
  images = ["../src/assets"];
  loaded = 0;

    loadImages(){
    for(let i = 0; i < this.images.length; i++){
      let img = new Image();
      img.onload = () => {
        this.loadedI();
      }
      img.src = this.images[i];
    }
  }

  loadedI(){
    this.loaded++;
    if(this.images.length == this.loaded){
      //all images loaded
    }
  }
  ngOnInit() {
     
  }
}
