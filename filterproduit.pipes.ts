import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterp'
})
export class FilterProduitPipe implements PipeTransform {
  transform(produit: any[] | undefined, searchTerm: string): any[] | undefined {
    if (!produit || !searchTerm) {
      return produit;
    }

    searchTerm = searchTerm.toLowerCase();

    return produit.filter(produit => {
      return produit.namep.toLowerCase().includes(searchTerm);

    })


  }
}
