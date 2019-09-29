import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);


  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  onclick(valor: number)
  {
this.popover.dismiss(
  {
    item: valor
  }
);
  }

}
