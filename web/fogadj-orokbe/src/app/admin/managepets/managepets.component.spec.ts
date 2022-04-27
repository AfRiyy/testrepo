import { ManagepetsComponent } from './managepets.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ManagepetsComponent', () => {
  let component: ManagepetsComponent;
  let fixture: ComponentFixture<ManagepetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
