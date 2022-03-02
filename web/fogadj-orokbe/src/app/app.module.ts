import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NopageComponent } from './nopage/nopage.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { ToknowComponent } from './toknow/toknow.component';
import { SheltersComponent } from './shelters/shelters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD:web/fogadj-orokbe/src/app/app.module.ts
import { RegisterComponent } from './register/register.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

>>>>>>> ac24d67ce91651c352daa9f8119f3f0274ef6526:web/macskapp/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NopageComponent,
    CatsComponent,
    DogsComponent,
    ToknowComponent,
    SheltersComponent,
<<<<<<< HEAD:web/fogadj-orokbe/src/app/app.module.ts
    AdminComponent,
    RegisterComponent
=======
    LoginComponent,
    AdminComponent,
>>>>>>> ac24d67ce91651c352daa9f8119f3f0274ef6526:web/macskapp/src/app/app.module.ts
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
