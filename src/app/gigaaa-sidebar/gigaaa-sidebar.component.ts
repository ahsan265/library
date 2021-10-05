import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $:any

@Component({
  selector: 'app-gigaaa-sidebar',
  templateUrl: './gigaaa-sidebar.component.html',
  styleUrls: ['./gigaaa-sidebar.component.css']
})
export class GigaaaSidebarComponent implements OnInit {
  collaspe_icon:any;
  collaspe_icon1:any;
  @Input('sidebar_item') sidebar_item:any;
  @Input('dropdown_icon') dropdown_icon:any;
  @Input('dropdown_heading') dropdown_heading:any;
  @Input('dropdown_array') dropdown_array:any;
  @Input('show_dropdown') show_dropdown:any;
  constructor(private dom:DomSanitizer) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(document).foundation();
     });
    this.collaspe_icon="../assets/collapse_icon.svg";
    this.collaspe_icon1="../assets/collapse_icon1.svg";

    $('.gigaaa-collapsepanel').on('click',  function ()  {
      $('#sidebarpanel').toggleClass('active');

 var icon1 = $(this).parent().find("#sidebarCollapse")

 if (icon1.hasClass('gigaaa-collaspe-icon'))
   
     icon1.removeClass('gigaaa-collaspe-icon').addClass("gigaaa-collaspe-icon1");
 else
     icon1.removeClass('gigaaa-collaspe-icon1').addClass("gigaaa-collaspe-icon");

 var icon = $(this).parent().find(".gigaaalogo")
 if (icon.hasClass('gigaaalogo gigaaa-logo-collaspe'))
   
     icon.removeClass('gigaaalogo gigaaa-logo-collaspe').addClass("gigaaalogo gigaaa-logo-collaspe1");
 else
     icon.removeClass('gigaaalogo gigaaa-logo-collaspe1').addClass("gigaaalogo gigaaa-logo-collaspe");
});
   
    this.show_dropdown=true;
    this.dropdown_icon='../assets/integration_icon.svg';
    this.dropdown_heading="Select integration";
    this.sidebar_item=[{icon:"../assets/dashboard_icon.svg",link:"dashboard",name:"Dashboard"},
    {icon:"../assets/calls_icon.svg",link:"call",name:"Calls"},
    {icon:"../assets/agents_icon.svg",link:"agents",name:"Agents"}];
    this.dropdown_array=[{link:"",name:"google"},
                        {link:"",name:"facebook"},
                        {link:"",name:"facebook"},
                        {link:"",name:"facebook"},
                        {link:"",name:"orkut"}]
  }
  getsidebaricons(icon:any)
  {
return  this.dom.bypassSecurityTrustResourceUrl(icon); 

  }

}
