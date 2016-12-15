import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [ 
    BrowserModule, // Required for every application
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default route
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard route - woudld normally go to 404 page.
    ]),
    ProductModule
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
