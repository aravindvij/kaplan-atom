import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any> {
    return this.http.get(`${environment.baseUrl}?q=kaplan%20test%20prep`);
  }
}
