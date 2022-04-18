import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ZipfilterPipe } from '../shared/pipe/zipfilter.pipe';

import { SheltersComponent } from './shelters.component';

describe('SheltersComponent', () => {
  let component: SheltersComponent;
  let fixture: ComponentFixture<SheltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
      declarations: [ SheltersComponent, ZipfilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('létrejön az irányítószám szűrő', () => {
    const zipfilter = fixture.debugElement.queryAll(By.css('.zipfilter'));
    expect(zipfilter.length).toBe(1);
  });
});
