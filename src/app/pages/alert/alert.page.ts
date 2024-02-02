import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
   titulo: string = 'Alert Page'

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentInput() {
    const input = await this.alertCtrl.create({
     header: 'Input',
     subHeader: 'Add name',
     inputs: [
      {
        name: 'nameInput',
        type: 'text',
        placeholder: 'Name'
      }
     ],
     buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
   
        handler: () => {
          console.log('Comfrim Cancel ');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: (data) => {
          console.log('Confirm Ok', data);
          this.titulo = data.nameInput
        },
      },
    ],
    })
     await input.present()
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'A Sub Header Is Optional',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ],
    });

    await alert.present();
  }
}

