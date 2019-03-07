import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}

  setLogged() {
    sessionStorage.setItem("validUser", "true");
  }

  logout() {
    console.log("logout service");
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
