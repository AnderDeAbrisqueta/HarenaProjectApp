import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  resetPassword() {
    this.authService
      .resetPassword(this.email)
      .then(() => {
        this.alertResetPassword();
        this.router.navigateByUrl('/login');
      })
      .catch(() => this.alertError());
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `Se le ha enviado un correo electrónico con un enlace
    que le permitirá recuperar la contraseña.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `No se ha podido enviar correo para reestablecer la contraseña.
    Inténtelo de nuevo más tarde.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
