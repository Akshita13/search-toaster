import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchClick=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  search(value)
  {
    this.searchClick.emit();
    //console.log("abc");
    console.log(value);
    
  }

}
