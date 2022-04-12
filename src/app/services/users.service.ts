import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
        let myHeaders = new HttpHeaders({ "myHeader": "myValue" });
        myHeaders = myHeaders.set("test", "true"); //必须这么写 httpHeader是不可变的 直接设置没用

        let myParams = new HttpParams({ fromString: 'name=cz&id=1' });
        myParams = myParams.set("test", "true");
        return this.http.get<User[]>(this.url, { headers: myHeaders, params: myParams });
    }

    getUser(): Observable<User> {
        return this.http.get<User>(this.url + '/1');
    }

}