import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BreedService } from './breed.service';

describe('BreedService', () => {
  let service: BreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ]});
    service = TestBed.inject(BreedService);
  });

  it('a szolgáltatás elkészül', () => {
    expect(service).toBeTruthy();
  });
});
