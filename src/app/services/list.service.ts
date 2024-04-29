import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public url = "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }

    getAllCards(){
    return this.http.get(this.url)
    }

}
