import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { ContainerComponent } from './container/container.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const MAT_MODULES = [
    MatCardModule,
    MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryItemComponent,
    ContainerComponent,
    ListItemComponent
  ],
  imports: [
      MAT_MODULES,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
