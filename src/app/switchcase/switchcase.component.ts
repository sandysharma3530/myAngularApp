import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-switchcase",
  templateUrl: "./switchcase.component.html",
  styleUrls: ["./switchcase.component.css"]
})
export class SwitchcaseComponent implements OnInit {
  a = [1, 2, [3, 4, [5, 6]]];
  newA = [];
  constructor() {
    this.newA = [this.a.toString()];
    console.log(this.newA);
  }

  ngOnInit() {}
}
