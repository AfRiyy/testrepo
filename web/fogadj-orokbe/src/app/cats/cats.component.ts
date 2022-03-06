import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { PetsService } from "../shared/pets.service";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  // cats: Cat[] = [];
  // url = 'http://localhost:3000/cats';
  // id = 0;
  // name = '';
  // species = '';
  // age = 0;
  // gender = '';
  // picturePath='';


  // ngOnInit(): void {
  // fetch(this.url)
  // .then(response => response.json()
  // .then(result => {
  //   this.cats = result;
  //   console.log(result);
  //   console.log(this.cats);
  // }));

  // }

  pets: any;
  constructor(private pet: PetsService) { }
  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this.pet.getPets().subscribe(result => {
      this.pets = result;
      console.log(JSON.stringify(result));
    });
  }
}

