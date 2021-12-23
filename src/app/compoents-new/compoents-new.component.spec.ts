import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentsNewComponent } from './compoents-new.component';

describe('CompoentsNewComponent', () => {
  let component: CompoentsNewComponent;
  let fixture: ComponentFixture<CompoentsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoentsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
