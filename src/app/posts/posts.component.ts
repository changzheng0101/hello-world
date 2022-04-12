import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe({
        next: result => {
          this.posts = result as any;
          console.log(this.posts);
        },
        error: (error: Response) => {
          if (error.status == 404)
            alert("not found result");
          else {
            throwError
          }
        }
      })
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value };

    this.postService.addPost(post)
      .subscribe((response) => {
        this.posts.unshift(response);
      })
  }

  updatePost(post: any) {
    //patch 用于更新部分属性 post需要更新整个
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post: any) {
    this.postService.delPost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
