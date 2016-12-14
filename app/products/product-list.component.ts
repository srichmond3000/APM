import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html' // Note path relative to index.html
})
export class ProductListComponent{
    pageTitle: string = 'Product List';
}