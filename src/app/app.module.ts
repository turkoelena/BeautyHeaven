import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NailsComponent } from './nails/nails.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';

import { environment } from './../environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import  { DatabaseService} from './services/database.service';
import { PricesComponent } from './prices/prices.component';
import { HaircutComponent } from './haircut/haircut.component';
import { HaircolorComponent } from './haircolor/haircolor.component';
import { MakeupComponent } from './makeup/makeup.component';
import { BrowsComponent } from './brows/brows.component';
import { MassageComponent } from './massage/massage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NailsComponent,
    GalleryComponent,
    TeamComponent,
    ContactsComponent,
    PricesComponent,
    HaircutComponent,
    HaircolorComponent,
    MakeupComponent,
    BrowsComponent,
    MassageComponent,
     
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}
