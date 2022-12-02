import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CarrosPageRoutingModule } from "./carros-routing.module";
import { CarrosPage } from "./carros.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        CarrosPageRoutingModule
    ],
    declarations: [CarrosPage]
})

export class CarrosPageModule {}