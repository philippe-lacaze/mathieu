import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, AfterContentInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-deux',
  templateUrl: './form-deux.component.html',
  styleUrls: ['./form-deux.component.scss']
})
export class FormDeuxComponent implements OnInit {

  @Output()
  isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  user: FormGroup;

  constructor() {
    this.isValid.emit(false);
  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });

    this.user.statusChanges.subscribe(s => this.isValid.emit(s === 'VALID'));
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid);
  }

}
