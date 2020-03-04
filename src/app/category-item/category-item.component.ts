import {Component, Input, OnInit} from '@angular/core';
import {CATEGORIES, Item, STATIC_DATA_ITEMS} from "../external-config/data.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'sl-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

    @Input()
    category: CATEGORIES;

    data: Item[] = STATIC_DATA_ITEMS;

    constructor() {
    }

    ngOnInit(): void {
    }

    addItem() {
        console.log('Add item called');
    }


    drop(event: CdkDragDrop<Item[]>) {
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    }

}
