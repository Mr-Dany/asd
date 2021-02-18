import { JsonplaceService } from './../servicios/jsonplace.service';
import { Component} from '@angular/core';
import { ActionSheetController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  nombre:string="Daniel Loor";
  personaejemplo:any=[];
  persona:any=[];
  posts:any=[];
  comments:any=[];

  constructor(public actionSheetController: ActionSheetController, public toastController: ToastController,
     private placeholder:JsonplaceService) {
    this.personaejemplo=
    [
      {
        nombre:'daniel',
        apellido:'loor',
        cedula:'213'
      },
      {
        nombre:'Fausto',
        apellido:'Campues',
        cedula:'213'
      }
    ]
  }

  showPosts() {
    this.placeholder.getPosts()
      .then(data => {
        this.posts=data;  
      }).catch((err) => {
        this.mensaje('Error de conexion');
      });
  }
  showComments() {
      this.placeholder.getComments()
      .then(data => {
        this.comments=data;  
      }).catch((err) => {
        this.mensaje('Error de conexion');
      });
  }
  showPersona() {
    this.placeholder.getPersona()
    .then(data => {
      this.persona=data['persona'];  
    }).catch((err) => {
      this.mensaje('Error de conexion');
    });
}


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.mensaje('Delete clicked');
        }
      }, {
        text: 'Comentarios',
        icon: 'share',
        handler: () => {
          this.mensaje('Comentarios clicked');
          this.showComments();
        }
      }, {
        text: 'Posts',
        icon: 'caret-forward-circle',
        handler: () => {
          this.mensaje('Posts clicked');
          this.showPosts();
        }
      }, {
        text: 'Personas',
        icon: 'heart',
        handler: () => {
          this.mensaje('Person clicked');
          this.showPersona();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.mensaje('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async mensaje(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }




  








}
