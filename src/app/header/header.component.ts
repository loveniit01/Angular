import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogon: string='your one stop for every thing.'
  getSlogon(){
    return 'this is a new slogon for the application.'
  }
}
