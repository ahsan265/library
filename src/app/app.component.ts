import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input('sidebar_item') sidebar_item:any;
  @Input('dropdown_icon') dropdown_icon:any;
  @Input('dropdown_heading') dropdown_heading:any;
  @Input('dropdown_array') dropdown_array:any;
  @Input('show_dropdown') show_dropdown:any;

constructor(private route:Router)
{

}
  ngOnInit(): void {
  
  }
  title = 'gigaaasidebar';
  
}
