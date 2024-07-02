import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTable: any[] = [];
  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', [Validators.required]],
      scoreTwo: ['', [Validators.required]]
    });
  }

  searchFunction(): void {
    if (this.searchForm.valid) {
      this.matchService.searchFunction(this.searchForm.value).subscribe(
        (data) => {
          console.log('Matches from BE:', data.matches);
          this.searchTable = data.matches;
        }
       
      );
    }
  }
}
