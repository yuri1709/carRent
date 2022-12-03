import { Component, ViewChild, ViewEncapsulation } from "@angular/core";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'], //você pode importar mais de um estilo
    encapsulation: ViewEncapsulation.None
})

export class HomePage {

    constructor() {}

}