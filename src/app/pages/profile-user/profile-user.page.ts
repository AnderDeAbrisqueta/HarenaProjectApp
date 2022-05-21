import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface User {
  userName: string;
  userLastName: string;
}
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {
  user: User = {
    userName: '',
    userLastName: '',
  };

  userName: string = localStorage.getItem('userName');
  userLastName: string = localStorage.getItem('userLastName');
  userEmail: string = this.authService.getCurrentUser().email;

  constructor(private authService: AuthService) {}

  setUserName() {
    localStorage.setItem('userName', this.user.userName);
    localStorage.setItem('userLastName', this.user.userLastName);
  }

  ngOnInit() {}
}
