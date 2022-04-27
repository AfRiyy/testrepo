import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebreedsComponent } from './managebreeds.component';

describe('ManagebreedsComponent', () => {
  let component: ManagebreedsComponent;
  let fixture: ComponentFixture<ManagebreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebreedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
