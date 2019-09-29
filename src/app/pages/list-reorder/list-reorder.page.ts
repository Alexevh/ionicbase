import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mia Khalifa'];
  constructor() { }

  ngOnInit() {
  }

  reorder(evento){
    console.log(evento);

  /** en algunas versiones de angular al mover no reordena la lista asi que hay que hacerlo a mano
   * Yo dejo comentado el codigo por que hoy en mi version funciona sin problemas
   * const moverItem = this.personajes.splice(evento.detail.from, 1)[0];
   * this.personajes.splice(evento.detail.to,0, moverItem);
   */

    evento.detail.complete();
  }
}
