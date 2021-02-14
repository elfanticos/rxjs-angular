import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(
        private _http: HttpClient
    ) {}

    courses(): Observable<any> {
        return this._http.get('https://jsonplaceholder.typicode.com/posts');
    }
}