import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

/* el viewchild se usa cuando necesito poder hacer referencia a un elemento del HTML */
@ViewChild(IonInfiniteScroll, {static: false}) inifiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);



  constructor() { }

  ngOnInit() {
  }

  loadData(event) {

    // tslint:disable-next-line: max-line-length
    /* voy a simular una carga asincrona, ponele que en el metodo la api me gtrae 20 registros y cuando hago scroll me trae los 20 siguientes
    le sumo al arreglo eso */
    setTimeout(() => {

      /* simulo que en la BD la cantidad de registros son 50, si quiero cargar mas no peudo entonces cancelo el scroll */
      if (this.data.length > 50) {
        event.target.complete();
        /* *desabolito el componente */
        this.inifiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      /* ahora cancelo el scroll */
      event.target.complete();

    }, 1000);
  }

}
