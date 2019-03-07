import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "multisort"
})
export class MultisortPipe implements PipeTransform {
  transform(value: any[], args: any[]): any {
    if (!value) return value;
    if (!args) return value;
    if (Array.isArray(args)) {
      return args.toString();
    }
  }
}
