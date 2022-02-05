import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.css']
})
export class MatTabsComponent  {

  constructor() { }

  ngOnInit(): void {
    
  }
message:string
  title= 'I love angular'

  index;

  tabChange(tabDetails){
    this.message= `You have selected ${tabDetails.tab.textLabel} at index ${tabDetails.index}s`
  }
}
