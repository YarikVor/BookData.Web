import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.css']
})
export class ReviewListItemComponent {
  @Input() entity: any;
}
