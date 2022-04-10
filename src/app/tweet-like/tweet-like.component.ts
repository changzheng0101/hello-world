import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-like',
  templateUrl: './tweet-like.component.html',
  styleUrls: ['./tweet-like.component.css']
})
export class TweetLikeComponent {
  @Input('likeCount') likeCount: number = 0;
  @Input('isLiked') isLiked = false;

  onClick() {
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? +1 : -1;
  }


}
