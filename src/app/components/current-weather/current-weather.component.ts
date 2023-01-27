import {
  Component,
  OnInit,
  Input,
  // OnChanges,
  // SimpleChanges,
} from "@angular/core";
import { WeatherService } from "../../http/weather.service";
import { Weather } from "../../models/weather";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"],
})
export class CurrentWeatherComponent implements OnInit {
  //, OnChanges
  public data: Weather;
  @Input() currentZipCode?: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeather(this.currentZipCode);
  }
  // ngOnChanges(changes: SimpleChanges): void {
  // this.getCurrentWeather(changes.currentZipCode.currentValue);
  // }

  getCurrentWeather(zipCode: string) {
    this.weatherService.getWeather(zipCode).subscribe((data: Weather) => {
      this.data = data;
    });
  }
}
