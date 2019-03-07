import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private e1: ElementRef) {}

  @Input("appHighlight") highlightColor: string;
  // @Input() highlightColor: string;
  @Input() defaultColor: string;

  @HostListener("mouseenter") onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || "yellow");
  }

  @HostListener("mouseleave") onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.e1.nativeElement.style.backgroundColor = color;
  }
}
