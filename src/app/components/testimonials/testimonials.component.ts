import { Component,OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  // public img = "./assets/images/testimonials1.jpg"
  testmonialsData : any[] = [];
  constructor(private testimonials: TestimonialsService){}
  ngOnInit(): void {
    this.getAllTestimonials()
  }

  getAllTestimonials(){
    this.testimonials.getAllTestimonials().subscribe((res:any)=>{
      this.testmonialsData = res;
    })
  }
}
