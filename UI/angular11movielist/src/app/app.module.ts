import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowatchComponent } from './towatch/towatch.component';
import { ShowTowatchComponent } from './towatch/show-towatch/show-towatch.component';
import { AddEditTowatchComponent } from './towatch/add-edit-towatch/add-edit-towatch.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ShowMovielistComponent } from './movielist/show-movielist/show-movielist.component';
import { AddEditMovielistComponent } from './movielist/add-edit-movielist/add-edit-movielist.component';

import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TowatchComponent,
    ShowTowatchComponent,
    AddEditTowatchComponent,
    MovielistComponent,
    ShowMovielistComponent,
    AddEditMovielistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
