import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatoPage } from "./contato.component";

const routes: Routes = [
    {
        path: '', component: ContatoPage
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
export class ContatoPageRoutingModule {}