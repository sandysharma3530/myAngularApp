import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCapson]"
})
export class CapsonDirective {
  constructor(private e1: ElementRef) {}

  @HostListener("blur") onblur() {
    //this.e1.nativeElement.value = this.e1.nativeElement.value.toUpperCase();
    this.e1.nativeElement.style.textTransform = "UpperCase";
  }
}
