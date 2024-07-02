import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchTab: any = [
  ]

  constructor(private router: Router,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatch().subscribe(
      (data) => {
        this.matchTab = data.matches
      }
    );
  }
  goToInfo(id: Number) {
    alert(id)
    this.router.navigate([`matcheInfo/${id}`]);
  }
  result(a: number, b: number, team: string) {
    if (a > b) {
      return [team + ' win', 'green']
    } else if (a < b) {
      return [team + ' lose', 'red']
    } else {
      return ['score null', 'blue']
    }
  }

  deleteMatch(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log('here data from BE', data.isDeleted);
        if (data.isDeleted) {
          this.matchService.getAllMatch().subscribe(
            (dat) => {
              this.matchTab = dat.matches;
            }
          )
        }

      }
    )
  }
  editMatch(id: any) {
    this.router.navigate([`editMatch/${id}`])
  }
}
