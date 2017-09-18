import {Component} from "@angular/core"

@Component({
    selector: 'mon-app', //ma balise html
    template: '<h1>{{message}}</h1>' //templateUrl pour utilise un fichier a la place
})
export class AppComponent {
    private message:string = 'Bienvenue sur ma page faite avec angular';
}