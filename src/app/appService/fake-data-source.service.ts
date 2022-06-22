import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeDataSourceService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  dataMethod():Observable<any>{
    return this.http.get(this.url);
  }
}
