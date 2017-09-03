import { Answer } from '../shared/answer.model';

export class Question {
    public questionName: string;
    public questionDescription: string;
    public answers: Answer[];

    constructor(questionName: string, questionDescription: string, answers: Answer[]) {
        this.questionName = questionName;
        this.questionDescription = questionDescription;
        this.answers = answers;
    }
}
