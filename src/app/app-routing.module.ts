import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropDownObjComponent } from './drop-down-obj/drop-down-obj.component';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component';
const routes: Routes = [
  { path: '', component: MatTabsComponent },
  {
    path: 'stepper',
    loadChildren: () => import('./mat-stepper/mat-stepper.module').then(m => m.MatStepperModule)
  },
  {
  path: 'drop', component: DropDownObjComponent   
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
