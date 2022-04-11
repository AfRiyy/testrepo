import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('létrehozza a komponenst', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`az oldal címe 'FogadjÖrökbe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FogadjÖrökbe');
  });

  it('létrejön a menü', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const nav = fixture.debugElement.queryAll(By.css('nav'));
    expect(nav.length).toBe(1);
  });

  it('létrejön a footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const footer = fixture.debugElement.queryAll(By.css('footer'));
    expect(footer.length).toBe(1);
  });
  
  it('a footer tartalmazza a szerzői jogok jelölését (Patyi&David © 2022)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Patyi&David © 2022');
  });

  
});
