import { Component, OnInit } from '@angular/core';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list',
  styleUrls: ['grid-list.component.css'],
  templateUrl: 'grid-list.component.html',
})
export class GridListComponent implements OnInit {
  
  transportadoras: JSON[];
  
  ngOnInit(): void {
  }

}