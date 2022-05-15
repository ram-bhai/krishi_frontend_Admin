import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
video = "http://localhost:3000/service/view-services";
  constructor(private http: HttpClient) { }

  viewService():Observable<any>{
    return this.http.get(this.video);
  }
}
