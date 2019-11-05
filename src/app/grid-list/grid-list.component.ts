import { Component, OnInit } from '@angular/core';

import { Transportadora } from '../Model/Transportadora';
import { TransportadoraService } from './../Service/transportadora.service';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list',
  styleUrls: ['grid-list.component.css'],
  templateUrl: 'grid-list.component.html',
})
export class GridListComponent implements OnInit {

  transportadoras: Transportadora[];
  
  constructor(private service: TransportadoraService) { }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.transportadoras = data);
    this.service.list().subscribe(console.log);
  }

}