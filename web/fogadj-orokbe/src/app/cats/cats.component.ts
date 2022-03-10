import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { Pet } from '../pet';
import { PetsService } from "../shared/pets.service";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  // cats: Cat[] = [];
  // url = 'http://localhost:3000/cats';
  id = 0;
  name = '';
  species = '';
  age = 0;
  gender = '';
  picturePath='';


  // ngOnInit(): void {
  // fetch(this.url)
  // .then(response => response.json()
  // .then(result => {
  //   this.cats = result;
  //   console.log(result);
  //   console.log(this.cats);
  // }));

  // }

  pets: Pet[] = [];
  // constructor() { }
  // ngOnInit() {
  //   let url = 'http://localhost:8000/api/pets';
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.pets = data;
  //   })
  // }
  // getPets() {
  //   this.pet.getPets().subscribe(result => {
  //     this.pets = result;
  //     console.log(JSON.stringify(result));
  //   });
  // }

  petsData!: [];


  constructor(private petsService: PetsService) {}
 
  ngOnInit() {
    this.getAllPets();   
  }

  getAllPets() {
    this.petsService.getPets()
    .subscribe( res => {
      
      console.log(res.data)


    })
  }


}


