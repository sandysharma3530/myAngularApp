import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  message = false;
  authDetails = {
    user: "admin",
    pass: "admin"
  };
  // @Output() message = new EventEmitter();

  constructor(public router: Router) {
    sessionStorage.setItem("validUser", "false");
  }

  ngOnInit() {}

  submit() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    if (
      this.username == this.authDetails.user &&
      this.password == this.authDetails.pass
    ) {
      sessionStorage.setItem("validUser", "true");
      this.message = false;
      this.router.navigate(["/home"]);
    } else {
      this.message = true;
      sessionStorage.setItem("validUser", "false");
    }

    console.log(sessionStorage.getItem("validUser"));
  }
}
