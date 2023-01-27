import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "../../http/weather.service";

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"],
})
export class AddLocationComponent implements OnInit {
  public form: FormGroup;
  public listzipcodeEntred: any = [];
  public data: any;
  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    const data = localStorage.getItem("zipCodes");
    if (data !== null) {
      this.listzipcodeEntred = data?.split(",");
    }
    this.form = new FormGroup({
      zipCode: new FormControl("", Validators.required),
    });
  }
  onClick() {
    this.WeatherService.getWeather(this.form.value.zipCode).subscribe(
      (data) => {
        this.data = data;
        this.form.reset();
      }
    );
    this.listzipcodeEntred.push(this.form.value.zipCode);
    localStorage.setItem("zipCodes", this.listzipcodeEntred);
    // sessionStorage
  }
}
