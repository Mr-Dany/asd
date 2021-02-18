import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public  modalController:ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab2Page,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

}
