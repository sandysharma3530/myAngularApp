import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  registrationData: any = [];

  constructor() {}

  setUsers(userData: any) {
    this.registrationData.push(userData);
    sessionStorage.setItem(
      "userListing",
      JSON.stringify(this.registrationData)
    );
    console.log(this.registrationData);
  }

  getUsers() {
    return this.registrationData;
  }
}
