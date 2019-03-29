import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './modeles/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  findBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
}
