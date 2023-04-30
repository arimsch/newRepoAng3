import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketModule } from './basket/basket.module';
import { ItemListModule } from './item-list/item-list.module';
import { IItemsApiServiceToken } from './shared/interfaces/i-items-api-service';
import { ItemsApiService } from './shared/services/items-api.services';
import { BasketService } from './shared/services/basket.service';
import { TuiRootModule } from '@taiga-ui/core';
import { CountriesService } from './shared/services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CurrencyInterceptorService } from './shared/services/currency-interceptor.service';
import { CourseService } from './shared/services/course.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasketModule,
    ItemListModule,
    BrowserAnimationsModule,
    TuiRootModule,
    HttpClientModule,
  ],
  providers: [
    { provide: IItemsApiServiceToken, useClass: ItemsApiService },
    BasketService,
    CountriesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CurrencyInterceptorService,
      multi: true,
    },
    CourseService,
    ItemsApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
