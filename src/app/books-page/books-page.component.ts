import { Component } from '@angular/core';
import { ModelViewerService } from '../model-viewer.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
  providers: [ModelViewerService]
})
export class BooksPageComponent {

}
