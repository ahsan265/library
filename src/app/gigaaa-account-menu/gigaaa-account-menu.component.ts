import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-gigaaa-account-menu',
  templateUrl: './gigaaa-account-menu.component.html',
  styleUrls: ['./gigaaa-account-menu.component.css']
})
export class GigaaaAccountMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(document).foundation();
     });
  }

  counter(n:any){
    return Array(n)
  }
 

}
