import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddLocationComponent } from "./components/add-location/add-location.component";
import { ForecastComponent } from "./components/forecast/forecast.component";

const routes: Routes = [
  { path: "", component: AddLocationComponent },
  { path: "forecast/:zipCode", component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
