import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})  


export class TeamComponent implements OnInit  {
  public person: any;
  public team: any[] = [];
  private teamSubscribe: any;  

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.getPerson();
  }

  ngOnDestroy() {
    this.teamSubscribe.unsubscribe();
  }
  
  getPerson() {
    this.teamSubscribe = this.databaseService.getPerson().subscribe((team: any) => {
      this.team = team;
    })
  }
 
}


  

  

  
  
