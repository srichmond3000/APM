import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductDetailGuard } from './products/product-guard.service';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'product/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default route
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard route - woudld normally go to 404 page.
    ])
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
    ],
  providers: [ProductDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
