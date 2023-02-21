import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { produit } from 'src/app/produits';
@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  produit?:  produit
  data: any


  constructor(private service: ProduitService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getproduitById(id).subscribe(data => {
      this.produit = data
      console.log(this.produit)
    })
  }

  form = new FormGroup({
    qt: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
    date_cre: new FormControl('', [Validators.required]),
    date_mod: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateproduit(this.produit?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
