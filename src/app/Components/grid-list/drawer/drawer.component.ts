import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drawer-component',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  searchName: string;
  searchUf: string;
  searchCity: string;
  searchModal: string;

  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.filter.emit({
      searchName: this.searchName,
      searchUf: this.searchUf,
      searchCity: this.searchCity,
      searchModal: this.searchModal
    })
  }

}
