import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  
  customPickerOptions;
  customDate; 

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log('me llega el evento',evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  

  cambioFecha(event)
  {
    console.log("cambio de fecha", event);
    console.log("convierto de fecha", new Date(event.detail.value));
  }

}
