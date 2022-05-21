import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {
  userName: string = '';
  userLastName: string = '';
  UserEmail: string = this.authService.getCurrentUser().email;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
