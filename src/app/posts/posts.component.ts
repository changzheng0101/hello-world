import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    this.http.get(this.url)
      .subscribe((result) => {
        this.posts = result as any;
        console.log(this.posts);
      })
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value };

    this.http.post(this.url, post)
      .subscribe((response) => {
        this.posts.unshift(response);
      })
  }

  updatePost(post: any) {
    //patch 用于更新部分属性 post需要更新整个
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      })
  }

}
