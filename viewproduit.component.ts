import { Component } from '@angular/core';
import {OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { ngxCsv } from 'ngx-csv';
import autoTable from 'jsPDF-autoTable';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-viewproduit',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.css']
})
export class ViewproduitComponent implements OnInit {

  produit: any[] | undefined
  searchTerm:string='';
    url: string = "http://localhost:8081/";

    constructor(private service: ProduitService, private router: Router) {

    }

    ngOnInit(): void {
      this.service.getproduit().subscribe(data => {
        this.produit = data;
      })
    }

    deleteproduit(id: number){
      this.service.deleteproduit(id).subscribe(data => {
        this.produit = this.produit?.filter(produit=> produit.id !== id);
      })

        setTimeout(()=>{
          window.location.reload();
        }, 100);

    }

    updateproduit(id: number){
      this.router.navigate(['updateproduit', id]);
    }
    downlodCsvFil(){
      new ngxCsv(this.produit,'produits')
    }
    downlodPDF(){

      const doc = new jsPDF('p','pt');

      autoTable(doc, {

        body: this.produit,
        didDrawPage: (dataArg) => {
         doc.text('produits', dataArg.settings.margin.left, 10);
        }
   });
      doc.save('produits.pdf');

  }



}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterp'
})
export class FilterPipe implements PipeTransform {
  transform(produit: any[] | undefined, searchTerm: string): any[] | undefined {
    if (!produit || !searchTerm) {
      return produit;
    }

    searchTerm = searchTerm.toLowerCase();

    return produit.filter(produit => {
      return produit.nameproduit.toLowerCase().includes(searchTerm);
    });
  }
}
