import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pet } from '../shared/pet/pet';
import { PetsService } from '../shared/pet/pets.service';
import { ShelterInterface } from '../shared/shelter/shelter-interface';
import { ShelterService } from '../shared/shelter/shelter.service';
import { BreedInterface } from '../shared/breed/breed-interface';
import { BreedService } from '../shared/breed/breed.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newPetForm !: FormGroup
  updatePetForm !: FormGroup
  pets: Pet[] = [];
  cats: Pet[] = [];

  shelters: ShelterInterface[] = [];
  shelters2: ShelterInterface[] = [];

  breeds: BreedInterface[] = [];
  breeds2: BreedInterface[] = [];

  gender2!: any;
  neutered2!: any;

  image!:File;
  bname: any;
  Gender: any = ["hím", "nőstény"];
  gender: any;
  Neutered: any = ["igen", "nem"];
  neutered: any;
  sname!: string;
  shelters_id: any;
  shelter_name!: string;

  constructor(
    private petsService: PetsService,
    private shelt: ShelterService,
    private breedService: BreedService,
  ) { }


  ngOnInit(): void {
    this.getAllShelters();
    this.getAllPets();
    this.getAllBreeds();

    this.newPetForm = new FormGroup({
      name: new FormControl(''),
      bname: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      shelters_id: new FormControl(''),
      neutered: new FormControl(''),
      image: new FormControl('')
    });
    this.updatePetForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      bname: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      shelters_id: new FormControl(''),
      neutered: new FormControl(''),
      sname: new FormControl(''),
      image: new FormControl('')
    });
  }

  getAllPets() {
    this.petsService.getPets()
      .subscribe(res => {
        this.pets = res.data;
        this.pets.forEach(pet => {
          this.cats.push(pet);
        });
      })
  }
  getAllShelters() {
    this.shelt.getShelters()
      .subscribe(res => {
        this.shelters = res.data;
        this.shelters.forEach(shelter => {
          this.shelters2.push(shelter);
        });
      })
  }
  getAllBreeds() {
    this.breedService.getBreeds()
      .subscribe(res => {
        this.breeds = res.data;
        this.breeds.forEach(breed => {
          this.breeds2.push(breed);
          console.log(breed);

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
  changeShelter(e: any) {
    this.shelters_id?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  handleFileInput(event:any) {
    this.image = event.target.files[0];
  }

  newPet() {

    if (this.newPetForm.value.gender === "hím") {
      this.gender2 = 0;
    }
    if (this.newPetForm.value.gender === "nőstény") {
      this.gender2 = 1;
    }

    if (this.newPetForm.value.neutered === "igen") {
      this.neutered2 = 1;
    }
    if (this.newPetForm.value.neutered === "nem") {
      this.neutered2 = 0;
    }

    let name = this.newPetForm.value.name;
    let bname = this.newPetForm.value.bname;
    let age = this.newPetForm.value.age;
    let adopted = '0';
    let shelters_id = this.newPetForm.value.shelters_id;


    this.petsService.postPets(name, bname, age, this.gender2, adopted, shelters_id, this.neutered2,this.image)
      .subscribe(res => {
        if (res != 0) {
          alert("Sikeres felvétel");
          window.location.reload();
        } else {
          alert("A felvétel sikertelen!");
        }
      })
  }

  deletePet(id: number) {
    this.petsService.deletePet(id)
      .subscribe(res => {
        if (res != 0) {
          alert("Sikeres törlés");
          window.location.reload();
        } else {
          alert("A törlés sikertelen!");
        }
      })
  }

  onEdit(pet: any) {

    this.updatePetForm.controls['id'].setValue(pet.id);
    this.updatePetForm.controls['name'].setValue(pet.name);
    this.updatePetForm.controls['bname'].setValue(pet.bname);
    this.updatePetForm.controls['age'].setValue(pet.age);
    this.updatePetForm.controls['gender'].setValue(pet.gender);
    this.updatePetForm.controls['shelters_id'].setValue(pet.shelters_id);
    this.updatePetForm.controls['neutered'].setValue(pet.neutered);
  }

  updatePet() {

    if (this.updatePetForm.value.gender === "hím") {
      this.gender2 = 0;
    }
    if (this.updatePetForm.value.gender === "nőstény") {
      this.gender2 = 1;
    }

    if (this.updatePetForm.value.neutered === "igen") {
      this.neutered2 = 1;
    }
    if (this.newPetForm.value.neutered === "nem") {
      this.neutered2 = 0;
    }

    let id = this.updatePetForm.value.id;
    let name = this.updatePetForm.value.name;
    let bname = this.updatePetForm.value.bname;
    let age = this.updatePetForm.value.age;
    let adopted:any = 0;
    let shelters_id = this.updatePetForm.value.shelters_id;

    this.petsService.updatePetsWithImage(id, name, bname, age, this.gender2, adopted, shelters_id, this.neutered2,this.image)
      .subscribe(res => {
        if (res != 0) {
          alert("Sikeres frissítés!");
          window.location.reload();
        } else {
          alert("A frissítés sikertelen!");
        }
      })
  }

}
