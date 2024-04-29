import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from 'src/app/services/team-member.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  public teamData: any[]=[];
constructor(private teamService: TeamMemberService){}
ngOnInit(): void {
  this.getAllTeamMembers();
}
getAllTeamMembers(){
  this.teamService.geAllteamMembers().subscribe((teamRes:any)=>{
    this.teamData = teamRes;
    console.log(this.teamData)
  })
}
}
