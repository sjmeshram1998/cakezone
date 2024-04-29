import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-menu-pricing',
  templateUrl: './menu-pricing.component.html',
  styleUrls: ['./menu-pricing.component.css']
})
export class MenuPricingComponent implements OnInit {
  public listData:any[] = []; 
  constructor(private listService : ListService){}
  ngOnInit(): void {
    this.getAllCards();
  }


  getAllCards(){
    this.listService.getAllCards().subscribe((res:any)=>{
      this.listData = res;
      console.log(this.listData)
    },error=>{
      console.log(error)
    })
  }
}
