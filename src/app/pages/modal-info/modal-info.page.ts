import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {


   /* declaro asi las propiedades que el padre me va a mandar a mi */
  @Input() nombre;
  @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  salirSinArgumentos()
  {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss(
      {
        nombre: 'Jack Bauer',
        pais: 'USA'
      }
    );
  }

}
