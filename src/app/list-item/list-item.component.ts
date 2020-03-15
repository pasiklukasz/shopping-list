import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CATEGORIES, ItemSelectionEvent} from "../external-config/data.model";

@Component({
  selector: 'sl-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  inBox: boolean = false;

  @Input()
  name: string;

  @Input()
  category: CATEGORIES;

  @Output()
  itemSelection: EventEmitter<ItemSelectionEvent> = new EventEmitter<ItemSelectionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleInBox() {
    console.log('Toggler');
    this.inBox = !this.inBox;
    this.itemSelection.emit({selected: this.inBox})
  }

}
