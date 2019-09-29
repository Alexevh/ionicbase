import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})

export class InputPage implements OnInit {

  nombre: string;
  usuario = {
      email: '',
      pass: ''
    };

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('se envia ael form');
    console.log('se sube el usr', this.usuario);
  }

}
