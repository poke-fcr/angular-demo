import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component'
import {MatInputModule} from '@angular/material/input' ;
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'
import { MatSelectModule } from '@angular/material/select';
import { DropDownObjComponent } from './drop-down-obj/drop-down-obj.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
@NgModule({
  declarations: [
    AppComponent,
    MatTabsComponent,
    DropDownObjComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
