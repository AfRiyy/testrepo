import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BreedInterface } from 'src/app/shared/breed/breed-interface';
import { BreedService } from 'src/app/shared/breed/breed.service';
import { SpecieInterface } from 'src/app/shared/specie/specie-interface';
import { SpecieService } from 'src/app/shared/specie/specie.service';

@Component({
  selector: 'app-managebreeds',
  templateUrl: './managebreeds.component.html',
  styleUrls: ['./managebreeds.component.css']
})
export class ManagebreedsComponent implements OnInit {

  newBreedForm !: FormGroup
  updateBreedForm !: FormGroup
  species: SpecieInterface[] = [];
  species2: SpecieInterface[] = [];
  sname:any;
  breeds: BreedInterface[] = [];
  breeds2: BreedInterface[] = [];
  bname:any;
  
  constructor(private specieService: SpecieService,
    private breedService: BreedService ) { }

  ngOnInit(): void {
    this.getAllSpecies();
    this.getAllBreeds();
    
    this.newBreedForm = new FormGroup({
      bname: new FormControl(''),
      sname: new FormControl('')
    });
    this.updateBreedForm = new FormGroup({
      id: new FormControl(''),
      bname: new FormControl(''),
      sname: new FormControl('')
    });
  }


  getAllSpecies() {
    this.specieService.getSpecies()
      .subscribe(res => {
        this.species = res.data;
        this.species.forEach(specie => {
          this.species2.push(specie);
        });
      })
  }
  getAllBreeds() {
    this.breedService.getBreeds()
      .subscribe(res => {
        this.breeds = res.data;
        this.breeds.forEach(breed => {
          this.breeds2.push(breed);
        });
      })
  }

  changeSName(e: any) {
    this.sname?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  newBreed(){
    let bname = this.newBreedForm.value.bname;
    let sname = this.newBreedForm.value.sname;

    this.breedService.postBreed(bname, sname)
      .subscribe(res => {
        if (res != 0) {
          alert("Sikeres felvétel");
          window.location.reload();
        } else {
          alert("A felvétel sikertelen!");
        }
      })
  }

  onEdit(breed: any) {
    this.updateBreedForm.controls['id'].setValue(breed.id);
    this.updateBreedForm.controls['name'].setValue(breed.bname);
    this.updateBreedForm.controls['bname'].setValue(breed.sname);
  }

  updateBreed(){

  }

  deleteBreed(id:any){
    this.breedService.deleteBreed(id)
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
