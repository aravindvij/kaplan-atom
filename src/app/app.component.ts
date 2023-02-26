import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kaplan-atom';
  showMenu = false;
  
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}
