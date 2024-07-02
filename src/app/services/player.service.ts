import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string="http://localhost:3000/api/players"
  constructor( private httpClient:HttpClient) { }

  addPlayer(player:any){
    return this.httpClient.post<{isAddPlayer:boolean}>(this.playerURL,player)
  }

  editPlayer(player:any){
    return this.httpClient.put<{isEditPlayer:string}>(this.playerURL,player)
  }

  deletePlayerById(id:any){
    return this.httpClient.delete<{isDeletedPlayer:boolean}>(`${this.playerURL}/${id}`)
  }

  getAllPlayer(){
    return this.httpClient.get<{players:any}>(this.playerURL)
  }

  getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`)
  }
}
