import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { VeiculoCard } from "src/app/core/models/veiculosRent.models";
@Component({
    selector: 'app-contato',
    templateUrl: 'contato.page.html',
    styleUrls: ['contato.page.scss']
})
export class ContatoPage {

    veiculosCard: VeiculoCard[] = []

    constructor(private http: HttpClient){}
    ngOnInit() {
        this.getJson()
    }

    getJson() {
        this.http.get<VeiculoCard[]>("http://localhost:3000/veiculosCard").subscribe(resultado => this.veiculosCard = resultado);
    }
}
