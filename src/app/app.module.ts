import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReviewListItemComponent } from './review-list-item/review-list-item.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { BookListAllComponent } from './book-list-all/book-list-all.component';
import { BookListRecommendedComponent } from './book-list-recommended/book-list-recommended.component';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EditBookComponent,
    BookListComponent,
    BookListItemComponent,
    ViewBookComponent,
    BooksPageComponent,
    ReviewListComponent,
    ReviewListItemComponent,
    BookListAllComponent,
    BookListRecommendedComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: EditBookComponent, pathMatch: 'full' },
    ]),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
