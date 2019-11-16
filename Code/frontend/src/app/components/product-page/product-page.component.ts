import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {AutounsibscribeService} from '../../services/autounsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {ProductImageService} from '../../utils/product-image-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent extends AutounsibscribeService implements OnInit, OnDestroy {

  private product: Product;
  private id: string;
  private imageSrc: string;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private productImageService: ProductImageService) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getData(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(value => {
      console.log(value);
      this.product = value as Product;
      this.imageSrc = this.productImageService.getImageSrc(this.product.id);
    });
  }

  public getImage(): string {
    return this.imageSrc;
  }

}
