import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/pojo/user';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: result => this.users = result,
      error: error => console.log(error),
      complete: () => console.log('done')
    });

    this.userService.getUser().subscribe({
      next: result => console.log(result),
      error: error => console.log("process"),
      complete: () => console.log('done')
    })
  }

}
