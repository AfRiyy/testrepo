import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../shared/pet/pet';
import { PetsService } from "../shared/pet/pets.service";
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  pets: Pet[] = [];
  cats: Pet[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this.petsService.getPets()
    .subscribe( res => {
      this.pets = res.data;
      this.pets.forEach(pet => {
        if(pet.sname == "házi macska" && pet.adopted == false){
          console.log(pet);
          this.cats.push(pet);
        }
      });
    })
  }

  trackItem(pet: any): any {
    return pet.id;
}
}


