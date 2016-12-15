import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private _sub: Subscription;

    constructor(private _route: ActivatedRoute, 
        private _router: Router,
        private _productService: ProductService){

    }

    ngOnInit(): void{
        this._sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
        
        
        
        // The + is a shortcut to convert the string id value to a numeric.
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    ngOnDestroy(): void{
        this._sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}