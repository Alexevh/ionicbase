import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] =[];
  textoBuscar = '';

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getDiscos().subscribe(albumes => {
      this.albumes = albumes;
    });
  }


  buscar(evento)
  {
  this.textoBuscar = evento.detail.value;
  }
}
