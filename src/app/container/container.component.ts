import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from "../external-config/data.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'sl-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  categories: CATEGORIES[] = [
      CATEGORIES.Vegetables
  ];

  constructor() { }

  ngOnInit(): void {
  }

    drop(event: CdkDragDrop<CATEGORIES[]>) {
        moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    }
}
