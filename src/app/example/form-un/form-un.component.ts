import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-un',
  templateUrl: './form-un.component.html',
  styleUrls: ['./form-un.component.scss']
})
export class FormUnComponent implements OnInit {

  @Output()
  isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  user: FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });

    this.user.statusChanges
      .subscribe(s => this.isValid.emit(s === 'VALID'))
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid);
  }



}
