import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL: string = "http://localhost:3000/api/teams";

  constructor(private httpTeam: HttpClient) { }

  addTeam(team: any) {
    return this.httpTeam.post<{isAddTeam:boolean}>(this.teamURL, team);
  }

  editTeam(team: any) {
    return this.httpTeam.put<{ isEditTeam: string }>(this.teamURL, team);
  }

  deleteTeamById(id: any) {
    return this.httpTeam.delete<{ isDeleteTeam: boolean }>(`${this.teamURL}/${id}`);
  }

  getAllTeam() {
    return this.httpTeam.get<{ teams: any[] }>(this.teamURL);
  }

  getTeamById(id: any) {
    return this.httpTeam.get<{ team: any }>(`${this.teamURL}/${id}`);
  }
}



