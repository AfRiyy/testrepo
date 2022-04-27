import { SpecieService } from './../../shared/specie/specie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpecieInterface as Species} from 'src/app/shared/specie/specie-interface';
@Component({
  selector: 'app-managespecies',
  templateUrl: './managespecies.component.html',
  styleUrls: ['./managespecies.component.css']
})
export class ManagespeciesComponent implements OnInit {
  newSpecieForm !: FormGroup;
  updateSpecieForm !: FormGroup;

  species: Species[] = [];
  constructor(private specieService: SpecieService) {}

  ngOnInit(): void {
    this.getAllSpecies();
    this.newSpecieForm = new FormGroup({
      sname: new FormControl('')
    });
    this.updateSpecieForm = new FormGroup({
      id: new FormControl(''),
      sname: new FormControl(''),
    });
  }
  newSpecie(){
    let sname = this.newSpecieForm.value.sname;
    this.specieService.postSpecie(sname)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres felvétel");
        window.location.reload();
      } else {
        alert("A felvétel sikertelen!");
      }
    })
  }
  updateSpecie(){
    let id = this.updateSpecieForm.value.id;
    let sname = this.updateSpecieForm.value.sname;
    console.log(id+" sname: "+sname);
    
    this.specieService.updateSpecie(id,sname)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres módosítás");
        window.location.reload();
      } else {
        alert("A módosítás sikertelen!");
      }
    })
  }
  getAllSpecies(){
    this.specieService.getSpecies()
    .subscribe(res=>{
      this.species = res.data;
    })
  }
  deleteSpecie(id:number){
    this.specieService.deleteSpecies(id)
    .subscribe(res=>{
      if (res != 0) {
        alert("Sikeres törlés");
        window.location.reload();
      } else {
        alert("A törlés sikertelen!");
      }
    })
  }
  onEdit(specie: any) {
    this.updateSpecieForm.controls['sname'].setValue(specie.sname);
    this.updateSpecieForm.controls['id'].setValue(specie.id);
    }
}
