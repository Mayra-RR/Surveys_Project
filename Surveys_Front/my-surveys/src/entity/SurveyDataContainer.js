import {QuestionAnswerEntity} from './QuestionAnswerEntity';

export class SurveyDataContainer {
    _data = [];

    addEntity(question_id, answer) {
        this._data.push(new QuestionAnswerEntity(answer))
    }

    getAnswers() {
        return this._data;
    }
}