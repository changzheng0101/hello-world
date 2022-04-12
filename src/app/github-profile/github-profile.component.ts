import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log('onInit');
    // let id = this.router.snapshot.paramMap.get('id');
    // console.log(id);

    //将两个Subscriber组合订阅
    combineLatest([
      this.router.paramMap,
      this.router.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        //request server
        return 'xxx' //这是一个Subscribe对象
      })
    ).subscribe({
      //赋值
    })




    //subscribe可以完成一个组件不同数据的切换
    //subscribe 代表有数据变化就通知这个
    //得到路径中的参数
    this.router.paramMap
      .subscribe(params => {
        let id = params.get('id');
        console.log(id);
      })
  }

}
