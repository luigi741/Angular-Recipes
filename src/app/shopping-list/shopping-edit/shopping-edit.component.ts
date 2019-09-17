import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.js';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    clearShopList() {
        $('#name').val('');
        $('#amount').val('');
    }

    constructor() {}
    ngOnInit() {}
}