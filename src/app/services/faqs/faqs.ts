import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsResponse } from '../../ngrx/comments/comments.model';


// a service class to make the API calls
@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private readonly http: HttpClient){}

  getFaqs(): Observable<CommentsResponse> {
    return this.http.get<CommentsResponse>("https://dummyjson.com/comments");
  }  
}
