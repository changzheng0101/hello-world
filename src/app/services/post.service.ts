import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  addPost(post: any) {
    return this.http.post(this.url, post);
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  delPost(post: any) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
