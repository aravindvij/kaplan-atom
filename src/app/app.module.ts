import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BookListModule } from './modules/book-list/book-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookListModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
