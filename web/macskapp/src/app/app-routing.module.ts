import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NopageComponent } from './nopage/nopage.component';
import { SheltersComponent } from './shelters/shelters.component';
import { ToknowComponent } from './toknow/toknow.component';

import { AuthGuard } from './shared/auth.guard';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'toknow', component: ToknowComponent },
  { path: 'shelters', component: SheltersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
  { path: '**', component:  NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
