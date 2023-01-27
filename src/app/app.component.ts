import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { WeatherService } from "./weather.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
 
  public form: FormGroup;
  public listzipcodeEntred: any = [];
  public data: any;
  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.listzipcodeEntred = localStorage.getItem("salim")
    this.form = new FormGroup({
      zipCode: new FormControl(),
    });
  }
  onClick() {
    this.WeatherService.getWeather(this.form.value.zipCode).subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      }
    );
    if (localStorage.getItem("salim") == null) {
      
      this.listzipcodeEntred.push(this.form.value.zipCode),
        localStorage.setItem("salim", this.listzipcodeEntred);
    } else {
      this.listzipcodeEntred = localStorage.getItem("salim")?.split(",");
      this.listzipcodeEntred.push(this.form.value.zipCode),
        localStorage.setItem("salim", this.listzipcodeEntred);
       
    }
  }
}