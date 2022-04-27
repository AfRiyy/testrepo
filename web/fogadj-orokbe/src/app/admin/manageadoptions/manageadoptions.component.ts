import { AdoptionInterface } from './../../shared/adoption/adoption-interface';
import { AdoptionService } from './../../shared/adoption/adoption.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageadoptions',
  templateUrl: './manageadoptions.component.html',
  styleUrls: ['./manageadoptions.component.css']
})
export class ManageadoptionsComponent implements OnInit {
  newAdoptionForm !: FormGroup;
  updateAdoptionForm !: FormGroup;
  adoptions: AdoptionInterface[] = [];
  constructor(private adoptionService: AdoptionService) {}

  ngOnInit(): void {
    this.getAllAdoptions();
    this.newAdoptionForm = new FormGroup({
      date: new FormControl(''),
      user: new FormControl(''),
      name:new FormControl('')
    });
    this.updateAdoptionForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      user: new FormControl(''),
      name:new FormControl('')
    });
  }
  getAllAdoptions(){
    this.adoptionService.getAdoptions()
    .subscribe(res=>{
      this.adoptions = res.data;
    })
  }
  newAdoption(){
    let date = this.newAdoptionForm.value.date;
    let user = this.newAdoptionForm.value.user;
    let name = this.newAdoptionForm.value.name;
    this.adoptionService.postAdoption(date,user, name)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres felvétel");
        window.location.reload();
      } else {
        alert("A felvétel sikertelen!");
      }
    })
  }
  updateAdoption(){
    let id = this.updateAdoptionForm.value.id;
    let date = this.updateAdoptionForm.value.date;
    let user = this.updateAdoptionForm.value.user;
    let name = this.updateAdoptionForm.value.name;
    this.adoptionService.updateAdoption(id,date,user,name)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres módosítás");
        window.location.reload();
      } else {
        alert("A módosítás sikertelen!");
      }
    })
  }
  deleteAdoption(id:number){
    this.adoptionService.deleteAdoption(id)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres törlés");
        window.location.reload();
      } else {
        alert("A törlés sikertelen!");
      }
    })
  }
  onEdit(adoption: any) {
    this.updateAdoptionForm.controls['date'].setValue(adoption.date);
    this.updateAdoptionForm.controls['name'].setValue(adoption.name);
    this.updateAdoptionForm.controls['user'].setValue(adoption.user);
    this.updateAdoptionForm.controls['id'].setValue(adoption.id);
    }
}
