import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'; 
import { ProductsComponent } from './products/products.component';
import { NailsComponent } from './nails/nails.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PricesComponent } from './prices/prices.component';
import { HaircutComponent } from './haircut/haircut.component';
import { HaircolorComponent } from './haircolor/haircolor.component';
import { MakeupComponent } from './makeup/makeup.component';
import { BrowsComponent } from './brows/brows.component';
import { MassageComponent } from './massage/massage.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'nails', component: NailsComponent },
  { path: 'haircut', component: HaircutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'haircolor', component: HaircolorComponent },
  { path: 'makeup', component: MakeupComponent },
  { path: 'brows', component: BrowsComponent },
  { path: 'massage', component: MassageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
