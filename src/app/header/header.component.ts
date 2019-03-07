import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private service: AuthService) {}

  ngOnInit() {}

  logout() {
    console.log("logout home");
    this.service.logout();
  }
}
