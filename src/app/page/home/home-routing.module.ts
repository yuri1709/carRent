import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: HomePage }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }