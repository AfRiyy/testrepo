import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { MainComponent } from './main/main.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
  { path: '**', component:  NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
