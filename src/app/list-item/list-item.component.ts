import {Component, Input, OnInit} from '@angular/core';
import {CATEGORIES} from "../external-config/data.model";

@Component({
  selector: 'sl-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  category: CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
