import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarComponent } from './validar.component';

describe('ValidarComponent', () => {
  let component: ValidarComponent;
  let fixture: ComponentFixture<ValidarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
    const fixture = TestBed.createComponent(ValidarComponent);
    const app = fixture.componentInstance;
    expect(app.hero.name).toEqual('2R');
  }); */
});
