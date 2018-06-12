import { DynamicQuestionsModule } from './dynamic-questions.module';

describe('DynamicQuestionsModule', () => {
  let dynamicQuestionsModule: DynamicQuestionsModule;

  beforeEach(() => {
    dynamicQuestionsModule = new DynamicQuestionsModule();
  });

  it('should create an instance', () => {
    expect(dynamicQuestionsModule).toBeTruthy();
  });
});
