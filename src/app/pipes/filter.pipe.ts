import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], searchText: string): any {
    if (!values) return [];
    if (!searchText) return values;

    searchText = searchText.toLowerCase();

    return values.filter(it => {
      return JSON.stringify(it)
        .toLowerCase()
        .includes(searchText);
    });
  }
}
