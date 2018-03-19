import { Component, OnInit } from '@angular/core';
import { FaqService } from "../faq.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
  
  faqs: Array<any>

  constructor( private service:FaqService) { 
    this.getAll()
  }

  ngOnInit() {
  }

  getAll():void{
    this.service.getAll().subscribe(faqs=>this.faqs=faqs)
  }

}
