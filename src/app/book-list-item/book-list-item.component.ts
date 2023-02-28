import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { faPencil, IconDefinition, faEye } from '@fortawesome/free-solid-svg-icons';
import { BookApiService } from '../book-api.service';
import { EditFormService } from '../edit-form.service';
import { ModelViewerService } from '../model-viewer.service';
import { ViewBookComponent } from '../view-book/view-book.component';


@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  public faPencil: IconDefinition = faPencil;
  public faEye: IconDefinition = faEye;

  @Input() entity!: any;

  constructor(private modelViewerService: ModelViewerService, private editFormService: EditFormService, private api: BookApiService) {

  }

  public open(): void {
    this.api.getBookById(this.entity.id).subscribe(e => {
      this.modelViewerService.component.open(e);
    });
    
  }

  public edit(): void {
    console.log(this.entity.id);
    this.api.getBookById(this.entity.id).subscribe(e => {
      this.editFormService.component.refresh(e);
      console.log(e);
    });

  }
}
