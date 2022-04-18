import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  let service: PetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ]});
    service = TestBed.inject(PetsService);
  });

  it('a szolgáltatás elkészül', () => {
    expect(service).toBeTruthy();
  });
});
