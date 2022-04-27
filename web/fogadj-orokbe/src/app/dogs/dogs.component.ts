import { Component, OnInit } from '@angular/core';
import { PetsService } from '../shared/pet/pets.service';
import { Pet } from '../shared/pet/pet';
import { AuthService } from '../shared/auth/auth.service';
import { formatDate } from '@angular/common';
import { AdoptionService } from '../shared/adoption/adoption.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  pets: Pet[] = [];
  dogs: Pet[] = [];
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


  constructor(private petsService: PetsService, private auth: AuthService,
    private adoption: AdoptionService) {}

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this.petsService.getPets()
    .subscribe( res => {
      this.pets = res.data;
      this.pets.forEach(pet => {
        if(pet.sname == "kutya" && pet.adopted == false){
          console.log(pet);
          this.dogs.push(pet);
        }
      });
    })
  }

  getPetData(id: any, bname: any, path: any, name: any, age: any, gender: any, neutered: any, shelter: any, sname:any){
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
  adoptDog() {
    let adopted = 1;
    this.petId = Number(this.petId);
    this.petName = this.petName.toString();
    this.petBName = this.petBName.toString();
    this.petAge = Number(this.petAge);

    this.petSheltersId = Number(this.petSheltersId);
    this.petSName = this.petSName.toString();

    this.myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    let image = '';
    let userId:number = Number(this.auth.userId());
    console.log("User id:"+this.auth.userId());

    this.adoption.newAdoption(this.myDate, this.petId, userId)
      .subscribe(res => {
        if (res != 0) {
          this.petsService.updatePets(this.petId, this.petName, this.petBName, this.petAge, this.petGender, adopted, this.petSheltersId, this.petNeutered,image)
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
