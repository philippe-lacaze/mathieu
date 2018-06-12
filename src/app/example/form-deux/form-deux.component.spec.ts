import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeuxComponent } from './form-deux.component';

describe('FormDeuxComponent', () => {
  let component: FormDeuxComponent;
  let fixture: ComponentFixture<FormDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
