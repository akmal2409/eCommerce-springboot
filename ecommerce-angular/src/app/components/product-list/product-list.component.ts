import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId = 1;
  previousCategoryId = 1;
  currentCategoryName: string;
  searchMode = false;

  // new properties for pagination
  pageNumber = 1;
  pageSize = 10;
  totalElements = 0;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }


  // tslint:disable-next-line:typedef
  listProducts(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode){
      this.handleSearchProduct();
    } else{
      this.handleListProduct();
    }

  }

  // tslint:disable-next-line:typedef
  handleListProduct() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId){
      // get the id param string and convert it to int
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    } else{
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }


    if (this.previousCategoryId != this.currentCategoryId) {
      this.pageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, pageNumber=${this.pageNumber}`);

    this.productService.getProductListPagination(this.pageNumber - 1, this.pageSize,
                                                  this.currentCategoryId).subscribe(
      this.processResult()
    );
  }

  // tslint:disable-next-line:typedef
  handleSearchProduct() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  // tslint:disable-next-line:typedef
  private processResult() {
    return data => {
      this.products = data._embedded.products;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    };
  }

  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
