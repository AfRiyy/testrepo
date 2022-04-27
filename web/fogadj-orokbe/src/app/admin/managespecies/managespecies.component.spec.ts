import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagespeciesComponent } from './managespecies.component';

describe('ManagespeciesComponent', () => {
  let component: ManagespeciesComponent;
  let fixture: ComponentFixture<ManagespeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagespeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagespeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
