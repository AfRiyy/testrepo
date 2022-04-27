import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesheltersComponent } from './manageshelters.component';

describe('NewshelterComponent', () => {
  let component: ManagesheltersComponent;
  let fixture: ComponentFixture<ManagesheltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesheltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
