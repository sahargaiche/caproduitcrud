import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  constructor(private service: ProduitService, private router: Router) { }
  data: any;
  id:any;
  form = new FormGroup({
    namep: new FormControl('', [Validators.required]),
    qt: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
    date_cre: new FormControl('', [Validators.required]),
    date_mod: new FormControl('', [Validators.required]),
    categorie_id:new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value;
    this.id=this.data.categorie_id;
    console.log(this.data)

    this.service.addproduit(this.id,this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
