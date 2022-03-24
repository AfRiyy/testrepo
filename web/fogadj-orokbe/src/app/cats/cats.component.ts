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
  petId!: any;
  petBName!: any;
  petPath!: any;
  petName!: any;
  petAge!: any;
  petGender!: any;
  petNeutered!: any;



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
            this.cats.push(pet);
          }
        });
      })
  }

  getPetId(id: any, bname: any, path: any, name: any, age: any, gender: any, neutered: any){
    this.petId = id.getAttribute('data-petid');
    this.petBName = bname.getAttribute('data-petbname');
    this.petPath = path.getAttribute('data-petpath');
    this.petName = name.getAttribute('data-petname');
    this.petAge = age.getAttribute('data-petage');
    this.petGender = gender.getAttribute('data-petgender');
    this.petNeutered = neutered.getAttribute('data-petneutered');
  }

  getPetModalData(petId: any){
    this.petId = petId;
    if (petId == this.cats.indexOf) {
      
    }
  }

  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  adoptCat(){
    // let id = this.adoptCatForm.value.id;
    let id = this.petId;
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





