import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalVariableParentComponent } from './local-variable-parent/local-variable-parent.component';
import { LocalVariableChildComponent } from './local-variable-parent/local-variable-child/local-variable-child.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './view-child-parent/view-child-child/view-child-child.component';
import { DataBindingParentComponent } from './data-binding-parent/data-binding-parent.component';
import { DataBindingChildComponent } from './data-binding-parent/data-binding-child/data-binding-child.component';
import { InterceptInputParentComponent } from './intercept-input-parent/intercept-input-parent.component';
import { InterceptInputChildComponent } from './intercept-input-parent/intercept-input-child/intercept-input-child.component';
import { ShoppingComponent } from './services/shopping/shopping.component';
import { ProductsComponent } from './services/shopping/products/products.component';
import { CartComponent } from './services/shopping/cart/cart.component';
import { ObservableComponent } from './observable/observable.component';
import { OutputBindingParentComponent } from './output-binding-parent/output-binding-parent.component';
import { OutputBindingChildComponent } from './output-binding-parent/output-binding-child/output-binding-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalVariableParentComponent,
    LocalVariableChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    DataBindingParentComponent,
    DataBindingChildComponent,
    InterceptInputParentComponent,
    InterceptInputChildComponent,
    ShoppingComponent,
    ProductsComponent,
    CartComponent,
    ObservableComponent,
    OutputBindingParentComponent,
    OutputBindingChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
