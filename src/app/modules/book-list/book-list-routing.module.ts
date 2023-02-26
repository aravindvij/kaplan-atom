import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bookList',
    pathMatch: 'full'
  },
  {
    path: 'bookList',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookListRoutingModule { }
