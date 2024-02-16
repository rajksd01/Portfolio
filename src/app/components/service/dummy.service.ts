import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  private http = inject(HttpClient);

  constructor() {}

  getData() {
    const params = new HttpParams().set('limit', 10);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`,{params});
  }
}
