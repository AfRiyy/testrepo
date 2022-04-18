import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToknowComponent } from './toknow.component';

describe('ToknowComponent', () => {
  let component: ToknowComponent;
  let fixture: ComponentFixture<ToknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToknowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('létrejön a "Hasznos információk" cím', () => {
    const jumbotron = fixture.debugElement.queryAll(By.css('.jumbotron'));
    expect(jumbotron.length).toBe(1);
  });

  it('létrejön a 4 kérdés', () => {
    const card = fixture.debugElement.queryAll(By.css('.card'));
    expect(card.length).toBe(4);
  });

});
