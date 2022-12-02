import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.component";

@NgModule({
    imports:[ 
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [ HomePage ]
})

export class HomePageModule {

}