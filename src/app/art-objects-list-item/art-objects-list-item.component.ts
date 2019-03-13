import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-art-objects-list-item',
  templateUrl: './art-objects-list-item.component.html',
  styleUrls: ['./art-objects-list-item.component.css']
})
export class ArtObjectsListItemComponent {
  @Input() isSelected;
  @Input() artObject;
  @Output() select = new EventEmitter();
}
