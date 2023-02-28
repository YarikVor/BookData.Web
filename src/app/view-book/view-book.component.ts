import { Component, ViewChild, ElementRef, Inject, NgModule, OnInit, OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { ModelViewerService } from '../model-viewer.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
  
})

export class ViewBookComponent {
  @ViewChild('content') content!: ElementRef;
  response!: any;
  private subscription!: Subscription;
  private modal!: NgbModalRef;

  constructor(private modalService: NgbModal, modelComponentServer: ModelViewerService, private api: BookApiService ) {
    modelComponentServer.component = this;
  }

  open(component: any) {
    this.response = component;
    this.modal = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', fullscreen: 'sm' });
    
    this.subscription = timer(0, 5000).subscribe(() => {
      this.api.getBookById(this.response.id).subscribe(r => {
        this.response = r;
      })
    });
  }

  close() {
    this.subscription.unsubscribe();
    this.modal.close();
  }


}
