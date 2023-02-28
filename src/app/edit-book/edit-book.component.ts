import { Component, ViewChild, ElementRef, } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { EditFormService } from '../edit-form.service';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent {
  public element!: any;
  public blob: any;
  @ViewChild('fileInput')
  fileInput!: ElementRef;

  public fileList!: FileList;

  constructor(editForm: EditFormService, private api: BookApiService) {
    editForm.component = this;
    this.clickClear();
  }

  clickAdd() {
    let file = this.fileInput.nativeElement.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64: string = reader.result as string ?? "";
      base64 = (base64 as string).substring(base64.indexOf(',') + 1) as string;

      let res = Object.assign(this.element, { cover: base64 });
      res = JSON.stringify(res);

      this.api.saveBook(res).subscribe();
      console.log(res);
    };


  }

  clickClear() {
    this.element = {
      id: 0,
      title: "",
      cover: "",
      genre: "",
      author: "",
      content: ""
    };

  }

  public refresh(entity: any) {
    console.log(entity);
    this.element = {
      id: entity.id,
      title: entity.title,
      cover: entity.cover,
      genre: entity.genre,
      author: entity.author,
      content: entity.content
    };

    let str = this._base64ToArrayBuffer(entity.cover);
    console.log(str);

    var ff = new File([str], 'from_server.jpg');

    var dt = new DataTransfer();
    dt.items.add(ff);
    var file_list = dt.files;

    this.fileList = file_list;

    this.fileInput.nativeElement.files = file_list;

  }

  _base64ToArrayBuffer(base64: string): ArrayBufferLike {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }



}
