import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from './../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public categories: any[] = [];
  public category: any;
  public images: any[] = [];
  private categorySubscribe: any;
  private imagesSubscribe: any;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.getAllCategories();
    this.getImages();

    this.route.url.subscribe(() => {
      const header: any = document.querySelector('app-header');
      header.style.position = 'sticky';
      header.style.top = '0';
    });
  }

  ngOnDestroy() {
    this.categorySubscribe.unsubscribe();
    this.imagesSubscribe.unsubscribe();

    const header: any = document.querySelector('app-header');
    header.style.position = 'static';
  }

  getAllCategories() {
    this.categorySubscribe = this.databaseService
      .getCategories()
      .subscribe((categories: any) => {
        this.categories = categories;
      });
  }

  getImages() {
    this.imagesSubscribe = this.databaseService
      .getImage()
      .subscribe(async (images: any) => {
        this.category ? this.findCategory(images) : (this.images = images);
      });
  }

  findCategory(images: any[]) {
    this.images = images.reduce((acc, item) => {
      if (item.category === this.category) {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  getImageCategory(id: string) {
    this.category = id;
    this.getImages();
  }
}
