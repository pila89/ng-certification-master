import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForcastComponent } from './forcast-component/forcast.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'forcast', component: ForcastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
