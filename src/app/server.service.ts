import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ServerService {
    constructor(private http: Http, private authService: AuthService) {}

    storeQuestions(questions: Object) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://qa-app-e9bcf.firebaseio.com/questiondata.json', questions, { headers: headers } );
    }

    getQuestions() {
        const token = this.authService.getToken();
        return this.http.get('https://qa-app-e9bcf.firebaseio.com/questiondata.json?auth=' + token)
            .map(
                (response: Response) => {
                    const data = response.json();
                    const arr = Object.keys(data).map(function (key) { return data[key]; });
                    console.log(arr);
                    return arr;
                }
            );
    }
}
