import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NopageComponent } from './nopage/nopage.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NopageComponent,
    CatsComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
