import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../../http/weather.service";
import { Forcast } from "../../models/forcast";
import { Weather } from "../../models/weather";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent implements OnInit {
  currentZipCode: string;
  data?: Forcast;
  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.currentZipCode = this.activatedRoute.snapshot.params["zipCode"];
    this.loadForcast();
  }

  loadForcast() {
    this.weatherService
      .getForcastWeather(this.currentZipCode)
      .subscribe((data : Forcast) => {
        this.data = data;
      });
  }
}
