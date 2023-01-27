import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Weather } from "../models/weather";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}
  getWeather (zipCode: string): Observable<Weather> {
    return this.httpClient.get <Weather>(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=5a4b2d457ecbef9eb2a71e480b947604`
    );
  }
}
