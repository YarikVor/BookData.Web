import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  public static readonly BASE_URL = "https://localhost:7083/api/";
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public options: any;

  constructor(private client: HttpClient) {
    this.options = { headers: this.headers };
  }

  public getTenBooks(order: string = ""): Observable<any> {
    return this.client.get(`${BookApiService.BASE_URL}books/all`);
  }

  public getRecommended(genre: string = ""): Observable<any> {
    return this.client.get(`${BookApiService.BASE_URL}recommended?genre=${genre}`);
  }

  public getBookById(id: number): Observable<any> {
    return this.client.get(`${BookApiService.BASE_URL}books/${id}/full`);
  }

  public saveBook(model: object): Observable<any>  {
    return this.client.post(`${BookApiService.BASE_URL}books/save`, model, this.options );
  }
}
