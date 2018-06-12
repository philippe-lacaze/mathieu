import { Component, OnInit, EventEmitter } from '@angular/core';
import { ModalAction } from 'zia-core';


@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  modalEvent: EventEmitter<ModalAction> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  open = () => {
    this.modalEvent.emit(new ModalAction());
  }

  close = () => {
    this.modalEvent.emit(new ModalAction({ show: false }));
  }

}
