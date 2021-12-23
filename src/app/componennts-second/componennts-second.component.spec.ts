import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenntsSecondComponent } from './componennts-second.component';

describe('ComponenntsSecondComponent', () => {
  let component: ComponenntsSecondComponent;
  let fixture: ComponentFixture<ComponenntsSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenntsSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenntsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
