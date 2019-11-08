export class Transportadora {
    email: string;
    name: string;
    company: string;
    phone: string;
    modal: string;
    street_address: string;
    number_address: string;
    neighborhood_address: string;
    city_address: string;
    uf_address: string;
    cep: string;

    constructor(email: string, name: string, company: string,
        phone: string, modal: string, street_address: string, number_address: string,
        neighborhood_address: string, city_address: string, uf_address: string, cep: string) {
            this.email = email;
            this.name = name;
            this.company = company;
            this.phone = phone;
            this.modal = modal;
            this.street_address = street_address;
            this.number_address = number_address;
            this.neighborhood_address = neighborhood_address;
            this.city_address = city_address;
            this.uf_address = uf_address;
            this.cep = cep;
    }
}