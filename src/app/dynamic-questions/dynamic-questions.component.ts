import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
@Component({
  selector: 'app-dynamic-questions',
  templateUrl: './dynamic-questions.component.html',
  styleUrls: ['./dynamic-questions.component.scss']
})
export class DynamicQuestionsComponent {

  questions: any[];

  constructor(service: QuestionsService) {
    this.questions = service.getQuestions();
  }

}
