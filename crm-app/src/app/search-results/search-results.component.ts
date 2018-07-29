import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  result$: Object;
  search_value = '';
  finalresult = [];

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.fetchUsers().subscribe(
      data => this.result$ = data
    );
  }


  onSearch(search_value) {
    console.log(this.result$);
    const result = Object.values(this.result$);
    result.forEach(user => {
      if (user.firstName === search_value) {
        this.finalresult.push(user);
      }
    });
    console.log(this.finalresult);
  }
}
