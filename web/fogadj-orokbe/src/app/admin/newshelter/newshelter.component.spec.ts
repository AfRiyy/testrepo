import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewshelterComponent } from './newshelter.component';

describe('NewshelterComponent', () => {
  let component: NewshelterComponent;
  let fixture: ComponentFixture<NewshelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewshelterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
