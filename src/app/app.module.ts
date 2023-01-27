import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AddLocationComponent } from "./components/add-location/add-location.component";
import { CurrentWeatherComponent } from "./components/current-weather/current-weather.component";
import { ForecastComponent } from "./components/forecast/forecast.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,AppRoutingModule],
  declarations: [
    AppComponent,
    AddLocationComponent,
    CurrentWeatherComponent,
    ForecastComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
