import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Transportadora } from 'src/app/Models/Transportadora';
import { TransportadoraService } from 'src/app/Services/transportadora.service';
import { CepService } from 'src/app/Services/cep.service';

@Component({
  selector: 'app-create-transportadora',
  templateUrl: './create-transportadora.component.html',
  styleUrls: ['./create-transportadora.component.css']
})
export class CreateTransportadoraComponent implements OnInit {

  private form: FormGroup;

  constructor(private service: TransportadoraService, private cepService: CepService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(11)
      ]),
      modal: new FormControl(null, [Validators.required]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*"),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      uf_address: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern("^[A-Z]+")
      ]),
      city_address: new FormControl(null, [Validators.required]),
      neighborhood_address: new FormControl(null, [Validators.required]),
      street_address: new FormControl(null, [Validators.required]),
      number_address: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+")
      ]),
      check_box: new FormControl(null, Validators.requiredTrue)
    });
  }

  cepChange() {
    if(this.form.controls.cep.valid){
      const cep = this.form.controls.cep.value;
      console.log(cep);
      console.log(this.cepService.getAddress(cep));
    }
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
      this.service.add(obj).subscribe(response => {
        this.form.reset;
        this.ngOnInit();
      });
    } else {
      alert('Form inválido');
    }
  }

}
