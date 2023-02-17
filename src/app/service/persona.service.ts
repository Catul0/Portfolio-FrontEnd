import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backend-ze76.onrender.com/persona/';
  //URL = 'http://localhost:8080/persona/';
  constructor(private httpClient: HttpClient) { }

  public getPersona():  Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+'detail/1');
  }
  public detail(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`)
  }
  public update(id:number, persona:Persona):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }
}
