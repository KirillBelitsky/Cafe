import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {AutounsibscribeService} from '../../services/autounsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent extends AutounsibscribeService implements OnInit, OnDestroy {

  private product: Product;


  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(value => {
      console.log(value);
      this.product = value as Product;
    });
  }

}
