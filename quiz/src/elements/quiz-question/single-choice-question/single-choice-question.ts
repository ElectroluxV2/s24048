import { QuizQuestion } from '../quiz-question';
import { ElementBuilder } from '../../../shared/element-builder';
import { Question } from '../../../shared/question';
import { QuestionType } from '../../../shared/question-type';
import { ReactiveSelect } from '../../reactive-inputs/reactive-select/reactive-select';
import { Attrs } from '../../attrs';
import { QuizManager } from '../../../shared/quiz-manager';

export class SingleChoiceQuestion extends QuizQuestion {
    protected readonly question: Question = {
        id: QuizManager.nextQuizId,
        shuffle: false,
        time: 0,
        type: QuestionType.singleChoice,
        text: 'How long is giraffe?',
        options: ['21.37 cm', '1m', '0m'],
        correct: ['1m'],
    };

    protected render(): void {
        const answerSelect = new ReactiveSelect()
            .withInitialState({
                options: this.question.options.map(v => ({text: v, value: v}))
            });

        answerSelect.try

        this.append(
            ElementBuilder
                .make('h1')
                .withText(this.question.text)
                .build(),
            answerSelect
        )
    }

}
