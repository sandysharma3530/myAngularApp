import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SignupComponent } from "./signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ForgorPasswordComponent } from "./forgor-password/forgor-password.component";
import { HomeComponent } from "./home/home.component";
import { HighlightDirective } from "./directive/highlight.directive";
import { CapsonDirective } from './directive/capson.directive';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MultisortPipe } from './pipes/multisort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SignupComponent,
    PageNotFoundComponent,
    ForgorPasswordComponent,
    HomeComponent,
    HighlightDirective,
    CapsonDirective,
    SwitchcaseComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    AboutUsComponent,
    ContactUsComponent,
    MultisortPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
