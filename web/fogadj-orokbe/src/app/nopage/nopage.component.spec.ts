import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NopageComponent } from './nopage.component';

describe('NopageComponent', () => {
  let component: NopageComponent;
  let fixture: ComponentFixture<NopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('a komponens elkészül', () => {
    expect(component).toBeTruthy();
  });

  it('a Főoldalra mutató link létrejön', () => {
    const link = fixture.debugElement.queryAll(By.css('a'));
    expect(link.length).toBe(1);
  });
});
