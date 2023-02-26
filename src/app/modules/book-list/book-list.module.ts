import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipe } from 'src/app/core/filterPipe';
import { FormsModule } from '@angular/forms';
import { CreateBookDialogComponent } from './create-book-dialog/create-book-dialog.component';


@NgModule({
  declarations: [
    BookListComponent,
    FilterPipe,
    CreateBookDialogComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BookListModule { }
