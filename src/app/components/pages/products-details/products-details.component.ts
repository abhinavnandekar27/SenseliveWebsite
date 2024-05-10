import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    productsSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
    }

	// for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}