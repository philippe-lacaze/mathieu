import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/example/example.component';
import { ModalExampleComponent } from 'app/example/modal-example/modal-example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  },
  {
    path: 'modal',
    component: ModalExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
