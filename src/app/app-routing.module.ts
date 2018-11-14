import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./paginas/portafolio/portafolio.component";
import { AboutComponent } from './paginas/about/about.component';
import { PortafolioItemComponent } from './paginas/portafolio-item/portafolio-item.component';
import { SearchComponent } from './paginas/search/search.component';


const app_routes: Routes = [
    { path: "home", component: PortafolioComponent },
    { path: "about", component: AboutComponent },
    { path: "item/:id", component: PortafolioItemComponent },
    { path: "search/:termino", component: SearchComponent },
    { path: "**", pathMatch: "full",  redirectTo: "home" }


];
 
 @NgModule({
    
    imports:[

        RouterModule.forRoot (app_routes, {useHash:true})
    ],
    exports:[
        RouterModule
    ]


 })
 export class AppRoutingModule { }