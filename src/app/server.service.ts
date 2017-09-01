import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeQuestions(questions: Object) {
        return this.http.post('https://qa-app-e9bcf.firebaseio.com/questiondata.json', questions);
    }
}
