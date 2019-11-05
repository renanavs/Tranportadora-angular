import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transportadora } from '../Model/Transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  private baseURL: String = "localhost:8080/";

  constructor(private http: HttpClient) { }

  list() {
    return this.http
            .get<Transportadora[]>(this.baseURL+"transportadora").subscribe();
  }

  info(id) {
    return this.http
            .get<Transportadora>(this.baseURL+"transportadora/"+id).subscribe();
  }

  add(obj: Transportadora) {
    return this.http
            .post(this.baseURL+"", null).subscribe();
  }

  update(obj: Transportadora, id: number) {
    return this.http
            .put(this.baseURL+"", null).subscribe();
  }

  delete(id) {
    return this.http
            .delete(this.baseURL+"", id).subscribe();
  }
}
