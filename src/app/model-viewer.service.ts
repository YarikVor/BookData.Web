import { Injectable } from '@angular/core';
import { ViewBookComponent } from './view-book/view-book.component';

@Injectable({
  providedIn: 'root'
})
export class ModelViewerService {
  private _component!: ViewBookComponent;

  public set component(value: ViewBookComponent) {
    this._component ??= value;
  }

  public get component() {
    return this._component;
  }


  constructor() { }
}
