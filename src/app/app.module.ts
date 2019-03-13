import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RijksmuseumApiService } from './rijksmuseum-api.service';
import { ArtObjectsListItemComponent } from './art-objects-list-item/art-objects-list-item.component';
import { ArtObjectDetailsComponent } from './art-object-details/art-object-details.component';
import { ExtendedObjectDetailsComponent } from './extended-object-details/extended-object-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import {PageService} from './page.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtObjectsListItemComponent,
    ArtObjectDetailsComponent,
    ExtendedObjectDetailsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RijksmuseumApiService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
