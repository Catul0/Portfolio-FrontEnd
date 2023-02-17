import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  skillsURL = 'http://localhost:8080/habilidades/'
  constructor(private httpClient: HttpClient) { }
  public lista():Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.skillsURL + 'lista');
  }
  public detail(id:number):Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.skillsURL + `detail/${id}`)
  }
  public save(habilidades: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.skillsURL+'create',habilidades);
  }
  public update(id:number, habilidades:Habilidades):Observable<any>{
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, habilidades);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.skillsURL+`delete/${id}`);
  }
}
