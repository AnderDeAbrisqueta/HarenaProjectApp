import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    const connectionSuccess = await this.authService.login(
      this.email,
      this.password
    );

    if (connectionSuccess) {
      this.router.navigateByUrl('/home');
    } else {
      this.loginAlert();
    }
  }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Conexión fallida',
      subHeader: 'No se ha podido acceder a la cuenta.',
      message: 'El correo electrónico o la contraseña no son correctos.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
