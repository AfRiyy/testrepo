import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { Pet } from '../shared/pet/pet';
import { PetsService } from '../shared/pet/pets.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newCatForm !: FormGroup
  pets: Pet[] = [];
  cats: Pet[] = [];
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private petsService: PetsService
  ) { }
  ngOnInit(): void {
    this.petsService.getPets();
    this.newCatForm = new FormGroup({
      name: new FormControl(''),
      breeds_id: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      shelters_id: new FormControl(''),
      neutered: new FormControl('')
    });
  }

  // getAllPets() {
  //   this.petsService.getPets()
  //   .subscribe( res => {
  //     this.pets = res.data;
  //     this.pets.forEach(pet => {
  //       if(pet.sname == "házi macska" && pet.adopted == false){
  //         console.log(pet);
  //         this.cats.push(pet);
  //       }
  //     });
  //   })
  // }

  newCat(){
    let name = this.newCatForm.value.name;
    let breeds_id = this.newCatForm.value.breeds_id;
    let age = this.newCatForm.value.age;
    let gender = this.newCatForm.value.gender;
    let adopted = false;
    let shelters_id = this.newCatForm.value.shelters_id;
    let neutered = this.newCatForm.value.neutered;

    this.petsService.postPets(name, breeds_id, age, gender, adopted, shelters_id, neutered)
    .subscribe(res => {
      console.log(res);
      if (res != 0) {
        // console.log(res.success);
        alert("Sikeres felvétel");
      }else{
        alert("A felvétel sikertelen!");
      }
    })
  }


}
