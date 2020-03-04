import {Component, OnInit} from '@angular/core';
import {Item, STATIC_DATA_ITEMS} from "../external-config/data.model";

@Component({
    selector: 'sl-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

    data: Item[] = STATIC_DATA_ITEMS;

    constructor() {
    }

    ngOnInit(): void {
    }

    addItem() {
        console.log('Add item called');
    }

}
