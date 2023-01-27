import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ZipCodeService } from "../../services/zip-code.service";

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"],
})
export class AddLocationComponent implements OnInit {
  public form: FormGroup;
  public entredZipCodesList: Array<string> = [];
  constructor(private zipCodeService: ZipCodeService) {}

  ngOnInit(): void {
    this.createForm();
    this.entredZipCodesList = this.zipCodeService.getAllZipCodes();
  }

  createForm() {
    this.form = new FormGroup({
      zipCode: new FormControl("", Validators.required),
    });
  }

  onClick() {
    this.zipCodeService.addZipCode(this.form.value.zipCode);
    this.form.reset();
  }
}
