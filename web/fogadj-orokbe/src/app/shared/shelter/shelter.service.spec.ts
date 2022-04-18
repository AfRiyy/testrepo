import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ShelterService } from './shelter.service';

describe('ShelterService', () => {
  let service: ShelterService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ]});
    service = TestBed.inject(ShelterService);
  });

  it('a szolgáltatás elkészül', () => {
    expect(service).toBeTruthy();
  });
});
