import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Componente} from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private data: DataService) { }

  ngOnInit() {

    this.componentes = this.data.getMenuPrincipal();
  }


  abrirMenu()
  {
    this.menuCtrl.toggle();
  }

}


