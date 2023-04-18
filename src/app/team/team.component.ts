import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})  


export class TeamComponent /* implements OnInit */ {

  /* public team: any;
  private teamSubscribe: any;
  private personSubscribe: any;
  public person: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
    ) {}

  ngOnInit() {
    this.getRouteParams();  
  }

  ngOnDestroy() {
    this.teamSubscribe.unsubscribe();
    this.personSubscribe.unsubscribe();
  }

getRouteParams() {
      return  this.route.queryParams.subscribe((params: any) => {
        if (params.team) {
        this.teamSubscribe = this.databaseService.subscribe((team: any) => {
        this.team = team;
        });
      }
    });   

  }
 */
}


  

  

  
  
