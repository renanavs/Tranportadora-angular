import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Transportadora } from 'src/app/Models/Transportadora';
import { TransportadoraService } from 'src/app/Services/transportadora.service';
import { CepService } from 'src/app/Services/cep.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-transportadora',
  templateUrl: './edit-transportadora.component.html',
  styleUrls: ['./edit-transportadora.component.css']
})
export class EditTransportadoraComponent implements OnInit {

  private form: FormGroup;

  private id;

  constructor(
    private service: TransportadoraService,
    private cepService: CepService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {    
    this.loadTransportadora();
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
    });
    this.loadTransportadora();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  cepChange() {
    if(this.form.controls.cep.valid){
      const cep = this.form.controls.cep.value;
      this.cepService.getAddress(cep).subscribe(data => {
        if(!data["erro"]){
          this.form.controls.street_address.setValue(data['logradouro']);
          this.form.controls.neighborhood_address.setValue(data['bairro']);
          this.form.controls.city_address.setValue(data['localidade']);
          this.form.controls.uf_address.setValue(data['uf']);
        }
      });
    }
  }

  loadTransportadora() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        if(params['id']) {
          this.id = params['id'];
          this.service.info(params['id']).subscribe(data => {
            this.form.controls.email.setValue(data['email']);
            this.form.controls.name.setValue(data['name']);
            this.form.controls.company.setValue(data['company']);
            this.form.controls.phone.setValue(data['phone']);
            this.form.controls.modal.setValue(data['modal']);
            this.form.controls.cep.setValue(data['cep']);
            this.form.controls.street_address.setValue(data['street_address']);
            this.form.controls.neighborhood_address.setValue(data['neighborhood_address']);
            this.form.controls.city_address.setValue(data['city_address']);
            this.form.controls.uf_address.setValue(data['uf_address']);
            this.form.controls.number_address.setValue(data['number_address']);
          });
        } else {
          alert('Ocorreu um erro');
        }
      }
    )
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
        cep: controls.cep.value,
        uf_address: controls.uf_address.value,
        city_address: controls.city_address.value,
        neighborhood_address: controls.neighborhood_address.value,
        street_address: controls.street_address.value,
        number_address: controls.number_address.value,
      });
      this.service.update(obj, this.id).subscribe(response => {
        this.router.navigate([""]);
        this.ngOnInit();
      }, (error: any) => {
        console.log(error);
        alert("erro");
      });
    } else {
      alert('Form inválido');
    }
  }

  delete() {
    if(confirm(" Tem certeza que deseja deletar esta transportadora? ")){
      this.service.delete(this.id).subscribe(
        data => {
          console.log(data);
          this.router.navigate([""]);
          this.ngOnInit();
        });
    };
  }

}
