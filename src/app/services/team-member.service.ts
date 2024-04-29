import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
teamUrl ="http://localhost:3000/team-members";
  constructor(private http: HttpClient) { }

  geAllteamMembers(){
    return this.http.get(this.teamUrl)
  }

}
