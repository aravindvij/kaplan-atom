import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/core/service/api-service.service';
import { CreateBookDialogComponent } from './create-book-dialog/create-book-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList:any = [];
  searchBook: any = '';

  constructor(private apiService: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(){
    this.apiService.getBookList().subscribe(res => {
      if(res){
        this.bookList = res.items;
      }
    }, (error) => {
      console.log(error);
    });
  }

  createBook(){
    this.dialog.open(CreateBookDialogComponent, {
      width: '50%',
    });
  }

}
