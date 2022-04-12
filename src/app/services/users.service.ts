import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, retry, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../common/pojo/user";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url: string = environment.url;

    constructor(private http: HttpClient) {

    }

    getUsers(): Observable<User[]> {

        return this.http.get<User[]>(this.url)
            .pipe(
                tap(users => {
                    console.log(users);
                    users[0].name = "test"
                }),
                //将name全变为大写
                map(users => users.map(user => ({
                    ...user,
                    name: user.name.toUpperCase()
                }))),
                retry(3), //多次重新请求
                catchError(error => {
                    return of([]); //出现错误，返回一个空的 component不会收到这个错误
                })
            );
    }

    getUser(): Observable<User> {
        return this.http.get<User>(this.url + '22/1')
            .pipe(
                catchError(this.handleError),//交给这个函数处理 会继续向上抛出
            );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.status === 404) return throwError(() => console.log("handleError"));
        return throwError(() => { 'test' });
    }

}