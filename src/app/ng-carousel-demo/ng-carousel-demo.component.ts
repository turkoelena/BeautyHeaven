import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';

@Component({
  selector: 'app-ng-carousel-demo',
  templateUrl: './ng-carousel-demo.component.html',
  styleUrls: ['./ng-carousel-demo.component.scss']
})
export class NgCarouselDemoComponent {

  constructor ( public sliderService: SliderService) {}
  ngOnInit(): void {}

  slides = [
    { img: './assets/images/home/cut-1.jpg' },
    { img: './assets/images/home/cut-2.jpg' },
    { img: './assets/images/home/cut-3.jpg' },  
    { img: './assets/images/home/color-1.jpg' },   
          
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true, 
    prevArrow: '<span class="left-btn"> < </span>',
    nextArrow: '<span class="left-btn"> > </span>',
  
  };
    
  slickInit(e: any) {
    console.log('slick initialized');
  }
   
}

