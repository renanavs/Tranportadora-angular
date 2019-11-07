import { Component, OnInit, Input } from '@angular/core';

import { TransportadoraService } from '../../../Services/transportadora.service';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() transportadora: Object;

  constructor(private service: TransportadoraService) { }

  ngOnInit() {
  }

}
