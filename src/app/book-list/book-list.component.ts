import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../modeles/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.findBooks().subscribe(
      (books: Book[]) => {
        this.books = books
      }
    )
  }

}
