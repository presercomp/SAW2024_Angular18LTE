import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient
    ){}

    private apiURL = 'http://localhost:9999';
    public login(u: string, p: string): Observable<any> {
        return this.http.post<Response>(this.apiURL, {user: u, password: p});
    }
}