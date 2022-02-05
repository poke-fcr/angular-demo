import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card'; 
interface languageDetails  {
  title: String,
  description:  String
}
@Component({
  selector: 'app-drop-down-obj',
  templateUrl: './drop-down-obj.component.html',
  styleUrls: ['./drop-down-obj.component.css']
})

export class DropDownObjComponent implements OnInit {
  
  @ViewChild('language') customTemplate: TemplateRef<any>;
  options = ['english', 'german', 'french', 'russian']
  currLanguage = ''
  detailsArr = []
  constructor(public dialog: MatDialogModule, 
    public dialog2: MatDialog) { }

    details: languageDetails ={
      title : "",
      description: ""
    }

  ngOnInit(): void {

  }
  updateLanguage(lang: any)
  {
    this.currLanguage = String(lang)
  }
  openLanguageDialog(){
    if(this.currLanguage != ''){
    console.log()
    const dialogRef = this.dialog2.open(this.customTemplate, {
      width: '500px'
   });
  

   dialogRef.afterClosed().subscribe(() => {
     console.log('The dialog was closed');
   });
  }
  else{
    alert('select atleast one lang from drop down')
  }
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this.details.title = form.value?.title
    this.details.description = form.value?.description
    this.detailsArr.push(form.value)
    this.dialog2.closeAll()
}


}
