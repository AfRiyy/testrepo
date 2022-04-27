import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageadoptionsComponent } from './manageadoptions.component';

describe('ManageadoptionsComponent', () => {
  let component: ManageadoptionsComponent;
  let fixture: ComponentFixture<ManageadoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageadoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageadoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
