import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ForgorPasswordComponent } from "./forgor-password/forgor-password.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./gaurd/auth.guard";
import { SwitchcaseComponent } from "./switchcase/switchcase.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "forgot-passowrd", component: ForgorPasswordComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "cases", component: SwitchcaseComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
