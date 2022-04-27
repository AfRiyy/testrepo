import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShelterInterface } from 'src/app/shared/shelter/shelter-interface';
import { ShelterService } from 'src/app/shared/shelter/shelter.service';

@Component({
  selector: 'app-manageshelters',
  templateUrl: './manageshelters.component.html',
  styleUrls: ['./manageshelters.component.css']
})
export class ManagesheltersComponent implements OnInit {

  shelters: ShelterInterface[] = [];
  shelters2: ShelterInterface[] = [];
  newShelterForm !: FormGroup
  updateShelterForm !: FormGroup

  constructor(private shelt: ShelterService) { }

  ngOnInit(): void {
    this.getAllShelters();
    this.newShelterForm = new FormGroup({
      shelter_name: new FormControl(''),
      shelter_zip: new FormControl(''),
      shelter_city: new FormControl(''),
      shelter_street_address: new FormControl(''),
      shelter_phone: new FormControl(''),
      shelter_website: new FormControl(''),
      shelter_facebook: new FormControl('')
    });
    this.updateShelterForm = new FormGroup({
      id: new FormControl(''),
      shelter_name: new FormControl(''),
      shelter_zip: new FormControl(''),
      shelter_city: new FormControl(''),
      shelter_street_address: new FormControl(''),
      shelter_phone: new FormControl(''),
      shelter_website: new FormControl(''),
      shelter_facebook: new FormControl('')
    });
    
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

  newShelter(){
    
    let shelter_name = this.newShelterForm.value.shelter_name;
    let shelter_zip = this.newShelterForm.value.shelter_zip;
    let shelter_city = this.newShelterForm.value.shelter_city;
    let shelter_street_address = this.newShelterForm.value.shelter_street_address;
    let shelter_phone = this.newShelterForm.value.shelter_phone;
    let shelter_website = this.newShelterForm.value.shelter_website;
    let shelter_facebook = this.newShelterForm.value.shelter_facebook;


    this.shelt.postShelter(shelter_name, shelter_zip, shelter_city, shelter_street_address, shelter_phone, shelter_website, shelter_facebook)
      .subscribe(res => {
        if (res != 0) {
          alert("Sikeres felvétel");
          window.location.reload();
        } else {
          alert("A felvétel sikertelen!");
        }
      })
  }

  onEdit(shelter: any) {
    this.updateShelterForm.controls['id'].setValue(shelter.id);
    this.updateShelterForm.controls['shelter_name'].setValue(shelter.shelter_name);
    this.updateShelterForm.controls['shelter_city'].setValue(shelter.shelter_city);
    this.updateShelterForm.controls['shelter_zip'].setValue(shelter.shelter_zip);
    this.updateShelterForm.controls['shelter_street_address'].setValue(shelter.shelter_street_address);
    this.updateShelterForm.controls['shelter_phone'].setValue(shelter.shelter_phone);
    this.updateShelterForm.controls['shelter_website'].setValue(shelter.shelter_website);
    this.updateShelterForm.controls['shelter_facebook'].setValue(shelter.shelter_facebook);
  }

  updateShelter(){
    let id = this.updateShelterForm.value.id;
    let shelter_name = this.updateShelterForm.value.shelter_name;
    let shelter_zip = this.updateShelterForm.value.shelter_zip;
    let shelter_city = this.updateShelterForm.value.shelter_city;
    let shelter_street_address = this.updateShelterForm.value.shelter_street_address;
    let shelter_phone = this.updateShelterForm.value.shelter_phone;
    let shelter_website = this.updateShelterForm.value.shelter_website;
    let shelter_facebook = this.updateShelterForm.value.shelter_facebook;  

    this.shelt.updateShelter(id, shelter_name, shelter_zip, shelter_city, shelter_street_address, shelter_phone, shelter_website, shelter_facebook)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres módosítás");
        window.location.reload();
      } else {
        alert("A módosítás sikertelen!");
      }
    })
  }

  deleteShelter(id:any){
    this.shelt.deleteShelter(id)
    .subscribe(res => {
      if (res != 0) {
        alert("Sikeres törlés");
        window.location.reload();
      } else {
        alert("A törlés sikertelen!");
      }
    })
  }

}
