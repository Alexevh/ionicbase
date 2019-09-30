import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuPrincipal()
  {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getHeroes()
  {
    return this.http.get('/assets/data/heroes.json').pipe(delay(2000));
  }


  getDiscos()
  {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
