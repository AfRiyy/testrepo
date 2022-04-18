import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CatsComponent } from './cats.component';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
      declarations: [ CatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('létrejön a macskák profilját mutató modal', () => {
    const modal = fixture.debugElement.queryAll(By.css('.modal'));
    expect(modal.length).toBe(1);
  });

  it('a macskák kártyái léteznek', () => {
    const card = fixture.debugElement.queryAll(By.css('.card-deck'));
    expect(card.length).toBe(1);
  });
});
