import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transportadora } from '../../Models/Transportadora';
import { TransportadoraService } from '../../Services/transportadora.service';

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
  transportadorasFiltered: Transportadora[];
  
  constructor(private service: TransportadoraService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe(data => {
      this.transportadoras = data
      this.transportadorasFiltered = this.transportadoras;
    });
  }

  receiveSearch(event) {
    this.transportadorasFiltered = this.filter(this.transportadoras, event);
    console.log(this.transportadorasFiltered);
  }

  filter(transportadoras :Transportadora[], filter: object) {
    return transportadoras.filter((transportadora: Transportadora) => {
      return !(
        transportadora.name.indexOf(filter['searchName']) &&
        transportadora.uf_address.indexOf(filter['searchUf']) &&
        transportadora.city_address.indexOf(filter['searchCity']) &&
        transportadora.modal.indexOf(filter['searchModal'])
      );
    })
  }

}