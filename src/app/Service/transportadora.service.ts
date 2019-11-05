import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transportadora } from '../Model/Transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  private baseURL: String = "api/"; //Proxy

  constructor(private http: HttpClient) { }

  list() {
    return this.http
            .get<Transportadora[]>(this.baseURL+"transportadora");
  }

  info(id) {
    return this.http
            .get<Transportadora>(this.baseURL+"transportadora/"+id);
  }

  add(obj: Transportadora) {
    return this.http
            .post(this.baseURL+"", null);
  }

  update(obj: Transportadora, id: number) {
    return this.http
            .put(this.baseURL+"", null);
  }

  delete(id) {
    return this.http
            .delete(this.baseURL+"", id);
  }
}
