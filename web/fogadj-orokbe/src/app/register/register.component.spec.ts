import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../shared/auth/auth.service';
import { By } from '@angular/platform-browser';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule
    ],
      declarations: [ RegisterComponent],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('létrejön a regisztrációs űrlap', () => {
    const form = fixture.debugElement.queryAll(By.css('form'));
    expect(form.length).toBe(1);
  });

  it('létrejön a regsztrációs gomb', () => {
    const button = fixture.debugElement.queryAll(By.css('button'));
    expect(button.length).toBe(1);
  });
});
