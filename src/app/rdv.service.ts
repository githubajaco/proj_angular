import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rdv } from './modeles/rdv';


@Injectable({providedIn: 'root'})
export class RdvService {

  constructor(private http: HttpClient) {   }
  
  //met à dispo une fct d'add déclenchée à la souscription seulement  
  addRdv(rdv: Rdv){
    return this.http.post('http://localhost:3000/rdvs', rdv)    
  }
  //met à disposition une fonction ramenant les rdvs
  findRdvs(): Observable<Rdv[]> {
    return this.http.get<Rdv[]>('http://localhost:3000/rdvs')    
  }
}
