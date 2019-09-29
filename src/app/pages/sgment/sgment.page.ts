import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sgment',
  templateUrl: './sgment.page.html',
  styleUrls: ['./sgment.page.scss'],
})
export class SgmentPage implements OnInit {


superHeroes: Observable<any>;
publisher = '';


  /* si hay un unico componente del tipo puedo declararlo como tal, si hay mas de uno entonces le pongo en el
  html un #nombre y aca en el viewchild lo llamo por el #nombre */
  @ViewChild('seg1', {static: true}) segmento: IonSegment;
  constructor(private data: DataService) { }

  ngOnInit() {

    this.segmento.value= 'Todos';
    this.superHeroes = this.data.getHeroes();
  }
  

  segmentChanged(evento)
  {
    const valorSegmento = evento.detail.value;

    if (valorSegmento==='Todos')
    {
      this.publisher='';
      return;
    }

    this.publisher = valorSegmento;
    console.log(valorSegmento);


  }

}
