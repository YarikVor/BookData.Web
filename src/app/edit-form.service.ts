import { Injectable } from '@angular/core';
import { EditBookComponent } from './edit-book/edit-book.component';

@Injectable({
  providedIn: 'root'
})
export class EditFormService {
  private _component!: EditBookComponent;

  public set component(value: EditBookComponent) {
    this._component ??= value;
  }

  public get component() {
    return this._component;
  }
}
