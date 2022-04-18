import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DogsComponent } from './dogs.component';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ DogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('létrejön a kutyák profilját mutató modal', () => {
    const modal = fixture.debugElement.queryAll(By.css('.modal'));
    expect(modal.length).toBe(1);
  });

  it('a kutyák kártyái léteznek', () => {
    const card = fixture.debugElement.queryAll(By.css('.card-deck'));
    expect(card.length).toBe(1);
  });
});
