import { Component, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router, public regUsers: UsersService) {}
  countries: any = [
    "Uzbekistan",
    "Russia",
    "United States",
    "India",
    "Afganistan"
  ];
  // testArr: any = [{ key: "abc", value: "abcd" }];
  ngOnInit() {}

  submit(f: NgForm) {
    // console.log(f.value);
    let userdata = f.value;

    this.regUsers.setUsers(userdata);

    this.router.navigate(["/login"]);
  }
}
