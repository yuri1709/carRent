import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IonicModule } from "@ionic/angular";
import { SlidePageModule } from "../slide/slide.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.component";


@NgModule({
    imports:[ 
        HomeRoutingModule,
        CommonModule,
        IonicModule,
        SlidePageModule
    ],
    declarations: [ HomePage]
})

export class HomePageModule {

}