import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componemts/login/login.component';
import { SignupComponent } from './componemts/signup/signup.component';
import { HomeComponent } from './componemts/home/home.component';
import { AddPlayerComponent } from './componemts/add-player/add-player.component';
import { AddMatchComponent } from './componemts/add-match/add-match.component';
import { AddTeamComponent } from './componemts/add-team/add-team.component';
import { AdminComponent } from './componemts/admin/admin.component';
import { MatchesComponent } from './componemts/matches/matches.component';
import { PlayersComponent } from './componemts/players/players.component';
import { TeamsComponent } from './componemts/teams/teams.component';
import { MatchInfoComponent } from './componemts/match-info/match-info.component';
import { TeamInfoComponent } from './componemts/team-info/team-info.component';
import { PlayersInfoComponent } from './componemts/players-info/players-info.component';
import { SearchComponent } from './componemts/search/search.component';
import { EditMatchComponent } from './componemts/edit-match/edit-match.component';
import { EditTeamComponent } from './componemts/edit-team/edit-team.component';
import { EditPlayerComponent } from './componemts/edit-player/edit-player.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'inscription',component:SignupComponent},
  {path:"Add-Player",component:AddPlayerComponent},
  {path:"Add-Match",component:AddMatchComponent},
  {path:"Add-Team",component:AddTeamComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Matches",component:MatchesComponent},
  {path:"players",component:PlayersComponent},
  {path:"teams",component:TeamsComponent},
  {path:'matcheInfo/:id',component:MatchInfoComponent},
  {path:'teamInfo/:id',component:TeamInfoComponent},
  {path:'playersInfo/:id',component:PlayersInfoComponent},
  {path:'Search',component:SearchComponent},
  {path:'editMatch/:id',component:EditMatchComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
