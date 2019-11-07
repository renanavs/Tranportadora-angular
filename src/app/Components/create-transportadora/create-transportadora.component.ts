import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-transportadora',
  templateUrl: './create-transportadora.component.html',
  styleUrls: ['./create-transportadora.component.css']
})
export class CreateTransportadoraComponent implements OnInit {

  private email: string = "";
  private name: string = "";
  private company: string = "";
  private phone: string = "";
  private modal: string = "";
  private cep: string = "";
  private uf_address: string = "";
  private city_address: string = "";
  private neighborhood_address: string = "";
  private street_address: string = "";
  private number_address: string = "";

  constructor() { }

  ngOnInit() {
  }

}
