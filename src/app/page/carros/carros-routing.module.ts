import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrosPage } from "./carros.component";

const routes: Routes = [
    {
        path: '', component: CarrosPage
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
    ,
    exports:[ 
        RouterModule 
    ] 
})
export class CarrosPageRoutingModule {}