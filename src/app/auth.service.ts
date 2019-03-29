import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;

  constructor(private http: HttpClient) { }

  login(formLogin: { email: string, password: string })
    : Observable<boolean> {
    return new Observable(observer => {
      this.http.post('http://localhost:3000/login', formLogin).subscribe(
        (result: { accessToken: string }) => {
          this._token=result.accessToken
          observer.next(true)
          observer.complete()
        },
        err => observer.error(err)
      )
    })
  }
  
//ici on déclenche un traitement asynchrone...il va continer le reste en attendant la réponse
  get token(){
    return this._token
  }
}
