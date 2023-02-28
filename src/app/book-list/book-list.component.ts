import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public response!: object[];
  public tabActive = 0;

  setTab(value: number) {
    this.tabActive = value;
  }
}
