import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showTable = "userLists";

  userLists: any;

  constructor(private router: Router, private regUsers: UsersService) {}

  ngOnInit() {
    this.userLists = JSON.parse(sessionStorage.getItem("userListing"));
    // console.log(JSON.stringify(sessionStorage.getItem("userListing")));
    // console.log(this.regUsers.getUsers());
    // this.userLists = this.regUsers.getUsers();
    // this.userLists = this.regUsers.registrationData;
  }
}
