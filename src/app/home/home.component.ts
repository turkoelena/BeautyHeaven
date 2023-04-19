import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.url.subscribe((url)=> {
      if (url[0].path === '') {
        const header: any = document.querySelector('app-header');
        header.style.position= 'sticky'; 
        header.style.top = '0';  
      }
    });
  }

  ngOnDestroy() {
    const header: any = document.querySelector('app-header');
    header.style.position = 'static';
  } 

}
