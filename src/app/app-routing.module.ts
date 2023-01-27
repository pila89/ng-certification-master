import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddLocationComponent } from "./components/add-location/add-location.component";
import { ForecastComponent } from "./components/forecast/forecast.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: AddLocationComponent },
  { path: "forecast/:zipCode", component: ForecastComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
