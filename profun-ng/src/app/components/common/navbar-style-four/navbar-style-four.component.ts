import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar-style-four',
    templateUrl: './navbar-style-four.component.html',
    styleUrls: ['./navbar-style-four.component.scss']
})
export class NavbarStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}