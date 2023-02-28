import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-list-recommended',
  templateUrl: './book-list-recommended.component.html',
  styleUrls: ['./book-list-recommended.component.css']
})
export class BookListRecommendedComponent {
  public response: any;

  private subscription!: Subscription;
  constructor(private api: BookApiService) {  }

  ngOnInit() {
    this.subscription = timer(0, 5000).subscribe(e => {
      this.api.getRecommended().subscribe(k => {
        this.response = k;
      });
    });
  }
  ngOnDestroy() {
    this.subscription.closed;
  }
}
