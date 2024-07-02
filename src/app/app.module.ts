import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componemts/header/header.component';
import { FooterComponent } from './componemts/footer/footer.component';
import { LoginComponent } from './componemts/login/login.component';
import { SignupComponent } from './componemts/signup/signup.component';
import { HomeComponent } from './componemts/home/home.component';
import { CupEventComponent } from './componemts/cup-event/cup-event.component';
import { ResultComponent } from './componemts/result/result.component';
import { NewsComponent } from './componemts/news/news.component';
import { StundingsComponent } from './componemts/stundings/stundings.component';
import { BlogComponent } from './componemts/blog/blog.component';
import { InfoComponent } from './componemts/info/info.component';
import { ArticleComponent } from './componemts/article/article.component';
import { AddMatchComponent } from './componemts/add-match/add-match.component';
import { AddTeamComponent } from './componemts/add-team/add-team.component';
import { AddPlayerComponent } from './componemts/add-player/add-player.component';
import { AdminComponent } from './componemts/admin/admin.component';
import { MatchesComponent } from './componemts/matches/matches.component';
import { PlayersComponent } from './componemts/players/players.component';
import { PlayerComponent } from './componemts/player/player.component';
import { TeamsComponent } from './componemts/teams/teams.component';
import { TeamComponent } from './componemts/team/team.component';
import { MatchesTableComponent } from './componemts/matches-table/matches-table.component';
import { TeamsTableComponent } from './componemts/teams-table/teams-table.component';
import { PlayersTableComponent } from './componemts/players-table/players-table.component';
import { MatchInfoComponent } from './componemts/match-info/match-info.component';
import { TeamInfoComponent } from './componemts/team-info/team-info.component';
import { PlayersInfoComponent } from './componemts/players-info/players-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { StarPipe } from './pipes/star.pipe';
import { SearchComponent } from './componemts/search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { EditMatchComponent } from './componemts/edit-match/edit-match.component';
import { EditTeamComponent } from './componemts/edit-team/edit-team.component';
import { EditPlayerComponent } from './componemts/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StundingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    TeamComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayersInfoComponent,
    ReversePipe,
    StarPipe,
    SearchComponent,
    EditMatchComponent,
    EditTeamComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
