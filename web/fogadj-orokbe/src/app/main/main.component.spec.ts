import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });
  
  it('a 4 navigáló kártya létrejön', () => {
    const card = fixture.debugElement.queryAll(By.css('.solution_card'));
    expect(card.length).toBe(4);
  });
  
});
