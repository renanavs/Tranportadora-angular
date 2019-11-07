import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Transportadora } from 'src/app/Models/Transportadora';
import { TransportadoraService } from 'src/app/Services/transportadora.service';

@Component({
  selector: 'app-create-transportadora',
  templateUrl: './create-transportadora.component.html',
  styleUrls: ['./create-transportadora.component.css']
})
export class CreateTransportadoraComponent implements OnInit {

  private form: FormGroup;

  constructor(private service: TransportadoraService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null),
      name: new FormControl(null),
      company: new FormControl(null),
      phone: new FormControl(null),
      modal: new FormControl(null),
      cep: new FormControl(null),
      uf_address: new FormControl(null),
      city_address: new FormControl(null),
      neighborhood_address: new FormControl(null),
      street_address: new FormControl(null),
      number_address: new FormControl(null),
      check_box: new FormControl(null)
    });
  }

  onSubmit() {
    const controls = this.form.controls;
    if(this.form.valid){
      const obj: Transportadora = Object({
        email: controls.email.value,
        name: controls.name.value,
        company: controls.company.value,
        phone: controls.phone.value,
        modal: controls.modal.value,
        uf_address: controls.uf_address.value,
        city_address: controls.city_address.value,
        neighborhood_address: controls.neighborhood_address.value,
        street_address: controls.street_address.value,
        number_address: controls.number_address.value,
      });
      this.service.add(obj).subscribe();
    }
  }

}
