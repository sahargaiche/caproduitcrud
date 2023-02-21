import { Pipe,PipeTransform } from "@angular/core";
import { categorie } from './categories';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(categorie: any[] | undefined, searchTerm: string): any[] | undefined {
    if (!categorie || !searchTerm) {
      return categorie;
    }

    searchTerm = searchTerm.toLowerCase();

    return categorie.filter(categorie => {
      return categorie.name.toLowerCase().includes(searchTerm);

    })


  }
}
