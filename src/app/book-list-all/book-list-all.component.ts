import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-list-all',
  templateUrl: './book-list-all.component.html',
  styleUrls: ['./book-list-all.component.css']
})
export class BookListAllComponent implements OnInit, OnDestroy {
  public response: any;

  private subscription!: Subscription;

  constructor(private api: BookApiService) { }

  ngOnInit() {
    this.subscription = timer(0, 5000).subscribe(e => {
      this.api.getTenBooks().subscribe(k => {
        this.response = k;
      });
    }
    );

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
