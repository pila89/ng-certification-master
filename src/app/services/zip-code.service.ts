import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ZipCodeService {
  private zipCodes: Array<string> = [];
  constructor() {
    const data = localStorage.getItem("zipCodes");
    if (data !== null) {
      this.zipCodes = data?.split(",");
    }
  }

  getAllZipCodes() {
    return this.zipCodes;
  }

  addZipCode(zipCode: string) {
    this.zipCodes.push(zipCode);
    localStorage.setItem("zipCodes", this.zipCodes.join(","));
  }
}
