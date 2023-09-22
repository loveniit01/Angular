import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchVal: string = "";

  changeSearchVal(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);

    this.searchVal = (<HTMLInputElement>eventData.target).value;
  }
}
