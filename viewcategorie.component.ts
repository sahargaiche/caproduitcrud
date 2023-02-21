import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { categorie } from 'src/app/categories';
import { ngxCsv } from 'ngx-csv';
import autoTable from 'jsPDF-autoTable';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-viewcategorie',
  templateUrl: './viewcategorie.component.html',
  styleUrls: ['./viewcategorie.component.css']
})
export class ViewcategorieComponent implements OnInit {

  categorie: any[] | undefined
  searchTerm:string='';

  url: string = "http://localhost:8081/";

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getcategorie().subscribe(data => {
      this.categorie = data;
    })

  }



  deletecategorie(id: number){
    this.service.deletecategorie(id).subscribe(data => {
      this.categorie = this.categorie?.filter(categorie => categorie.id !== id);
    })

      setTimeout(()=>{
        window.location.reload();
      }, 100);

  }

  updatecategorie(id: number){
    this.router.navigate(['update', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.categorie, 'categories');
  }
  downlodPDF(){

    const doc = new jsPDF('p','pt');

    autoTable(doc, {

      body: this.categorie,
      didDrawPage: (dataArg) => {
       doc.text('categories', dataArg.settings.margin.left, 10);
      }
 });
    doc.save('categories.pdf');
  }


}
