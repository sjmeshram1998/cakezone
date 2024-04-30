import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
public testimonialsUrl = "http://localhost:3000/testimonials";
  constructor(private http: HttpClient) { }
  getAllTestimonials(){
    return this.http.get(this.testimonialsUrl)
  }
}
