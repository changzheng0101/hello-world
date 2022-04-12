import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() { }

  //处理每个http请求 拦截器
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key = "fjlkajfk";
    const requestCopy = request.clone({ setHeaders: { api_key }, body: { id: 1, name: "hello" } });
    console.log(requestCopy);
    return next.handle(requestCopy);
  }
}
