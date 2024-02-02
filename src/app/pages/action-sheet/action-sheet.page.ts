import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass:'red',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Play',
          icon: 'play-circle-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          data: {
            action: 'favorite',
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

 
  }
}


