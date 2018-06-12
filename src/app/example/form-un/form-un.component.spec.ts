import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnComponent } from './form-un.component';

describe('FormUnComponent', () => {
  let component: FormUnComponent;
  let fixture: ComponentFixture<FormUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
