import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild('lista', {static: true}) lista: IonList;

  constructor(private data: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.data.getUsers();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje ,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }


  favorite(user){
 this.presentToast('se agrego '+user.name+' a los favoritos');
this.lista.closeSlidingItems();
  }

  share(user){
    console.log('Share', user);
    this.lista.closeSlidingItems();
  }

  borrar(user){
    console.log('Borrar', user);
    this.lista.closeSlidingItems();
  }

}
