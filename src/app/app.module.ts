import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostComponent } from './cost/cost.component';
import { CostsComponent } from './costs/costs.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CostComponent,
    CostsComponent,
    CurrencySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
