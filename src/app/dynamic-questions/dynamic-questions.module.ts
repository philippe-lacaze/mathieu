import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicQuestionsComponent } from './dynamic-questions.component';
import { DynamicFormQuestionComponent } from './widgets/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './widgets/dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    DynamicQuestionsComponent]
})
export class DynamicQuestionsModule { }
