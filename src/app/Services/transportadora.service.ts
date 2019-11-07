import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transportadora } from '../Models/Transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  private baseURL: String = "api/transportadora/"; //Proxy

  constructor(private http: HttpClient) { }

  list() {
    return this.http
            .get<Transportadora[]>(this.baseURL+"");
  }

  info(id) {
    return this.http
            .get<Transportadora>(this.baseURL+"/"+id);
  }

  add(obj: Transportadora) {
    const req = JSON.stringify(obj);
    console.log(req);
    return this.http
            .post(this.baseURL+"", req);
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
