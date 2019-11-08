import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Transportadora } from '../Models/Transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  private baseURL: String = "api/transportadora/"; //Proxy

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  list() {
    return this.http
            .get<Transportadora[]>(this.baseURL+"", this.httpOptions);
  }

  info(id) {
    return this.http
            .get<Transportadora>(this.baseURL+"/"+id, this.httpOptions);
  }

  add(obj: Transportadora) {
    const req = JSON.stringify(obj);
    return this.http
            .post(this.baseURL+"", req, this.httpOptions);
  }

  update(obj: Transportadora, id: string) {
    return this.http
            .put(this.baseURL+id, obj, this.httpOptions);
  }

  delete(id) {
    return this.http
            .delete(this.baseURL+id, this.httpOptions);
  }
}
