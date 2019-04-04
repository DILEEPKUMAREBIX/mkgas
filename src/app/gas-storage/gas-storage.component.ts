import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'gas-storage',
    templateUrl: './gas-storage.component.html',
    styleUrls: ['./gas-storage.component.css']
})
export class GasStorageComponent {
    constructor(private router: Router) { }

    routeToHome() {
        console.log("home");
        this.router.navigate(['gas-home']);
    }

    printInfo() {
        window.print();
    }
}