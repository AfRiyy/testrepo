import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
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
  adoptCatForm !: FormGroup;



  constructor(private petsService: PetsService,
    private auth: AuthService) { }

  ngOnInit() {
    this.getAllPets();
    this.adoptCatForm = new FormGroup({
      id: new FormControl('')
    });
  }

  getAllPets() {
    this.petsService.getPets()
      .subscribe(res => {
        this.pets = res.data;
        this.pets.forEach(pet => {
          if (pet.sname == "házi macska" && pet.adopted == false) {
            console.log(pet);
            this.cats.push(pet);
          }
        });
      })
  }

  trackItem(pet: any): any {
    return pet.id;
  }

  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  adoptCat(){
    // let id = this.adoptCatForm.value.id;
    let id = 10;
    let adopted = true;

    this.petsService.updatePets(id, adopted)
      .subscribe(res => {
        console.log(res);
        if (res != 0) {
          alert("Sikeres frissítés");
        } else {
          alert("A frissítés sikertelen!");
        }
      })
  }


  }





