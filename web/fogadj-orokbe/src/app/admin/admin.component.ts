import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
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
  gender2!:boolean;
  neutered2!:boolean;
  Bname: any =["sziámi", "kuvasz"];
  bname: any;
  Gender: any =["hím", "nőstény"];
  gender: any;
  Neutered: any =["igen", "nem"];
  neutered: any;
  sname!:string;
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private petsService: PetsService
  ) { }
  ngOnInit(): void {
    this.getAllPets();
    this.petsService.getPets();
    this.newCatForm = new FormGroup({
      name: new FormControl(''),
      bname: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      shelters_id: new FormControl(''),
      neutered: new FormControl(''),
      adopted: new FormControl(''),
      sname: new FormControl('')
    });
  }

  getAllPets() {
    this.petsService.getPets()
    .subscribe( res => {
      this.pets = res.data;
      this.pets.forEach(pet => {
          this.cats.push(pet);
          console.log(pet);
      });
    })
  }

  changeBName(e: any) {
    this.bname?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeGender(e: any) {
    this.gender?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeNeutered(e: any) {
    this.neutered?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  newPet(){
    if (this.newCatForm.value.gender === "hím") {
      this.gender2 = false;
    }
    if (this.newCatForm.value.gender === "nőstény") {
      this.gender2 = true;
    }
    if(this.newCatForm.value.bname==="kuvasz"){
      this.sname = "kutya";
    }
    if(this.newCatForm.value.bname==="sziámi"){
      this.sname = "házi macska";
    }

    if (this.newCatForm.value.neutered === "igen") {
      this.neutered2 = true;
    }
    if (this.newCatForm.value.neutered === "nem") {
      this.neutered2 = false;
    }

    

    let name = this.newCatForm.value.name;
    let bname = this.newCatForm.value.bname;
    let age = this.newCatForm.value.age;

    let adopted = false;
    let shelters_id = this.newCatForm.value.shelters_id;


    this.petsService.postPets(name, bname, age, this.gender2, adopted, shelters_id, this.neutered2, this.sname)
    .subscribe(res => {
      console.log(res);
      if (res != 0) {
        alert("Sikeres felvétel");
      }else{
        alert("A felvétel sikertelen!");
      }
    })
  }


}
