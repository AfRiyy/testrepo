import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdoptionService } from '../shared/adoption/adoption.service';
import { AuthService } from '../shared/auth/auth.service';
import { Pet } from '../shared/pet/pet';
import { PetsService } from "../shared/pet/pets.service";
import { formatDate } from '@angular/common';

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
  petSheltersId!: any;
  petSName!: any;

  myDate!: any;

  constructor(private petsService: PetsService,
    private auth: AuthService,
    private adoption: AdoptionService
  ) {

  }

  ngOnInit() {
    this.getAllPets();
    console.log(this.myDate);
  }

  getAllPets() {
    this.petsService.getPets()
      .subscribe(res => {
        this.pets = res.data;
        this.pets.forEach(pet => {
          if (pet.sname == "házi macska" && pet.adopted == false) {
            this.cats.push(pet);
            console.log(pet)
          }
        });
      })
  }



  getPetId(id: any, bname: any, path: any, name: any, age: any, gender: any, neutered: any, shelter: any, sname: any) {
    this.petId = id.getAttribute('data-petid');
    this.petBName = bname.getAttribute('data-petbname');
    this.petPath = path.getAttribute('data-petpath');
    this.petName = name.getAttribute('data-petname');
    this.petAge = age.getAttribute('data-petage');
    this.petGender = gender.getAttribute('data-petgender');
    this.petNeutered = neutered.getAttribute('data-petneutered');
    this.petSheltersId = shelter.getAttribute('data-petshelter');
    this.petSName = sname.getAttribute('data-petsname');
  }

  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  adoptCat() {
    let adopted= true;
    this.petId = Number(this.petId);
    this.petName = this.petName.toString();
    this.petBName = this.petBName.toString();
    this.petAge = Number(this.petAge);
    this.petSheltersId = Number(this.petSheltersId);
    this.petSName = this.petSName.toString();
    this.myDate = formatDate(new Date(), 'yyyy/MM/dd HH:MM:SS', 'en');
    let user:string = this.auth.userName();
    this.adoption.postAdoption(this.myDate, this.petName, user)
      .subscribe(res => {
        if (res != 0) {
          this.petsService.updatePetsWithoutImage(this.petId, this.petName, this.petBName, this.petAge, this.petGender, adopted, this.petSheltersId, this.petNeutered)
            .subscribe(res => {
              if (res != 0) {
                alert("Sikeres örökbefogadás!");
                window.location.reload();
              } else {
                alert("Az örökbefogadás sikertelen!");
              }
            })

        } else {
          alert("Az örökbefogadás sikertelen!");
        }
      })


  }


}





