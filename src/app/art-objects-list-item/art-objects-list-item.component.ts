import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MuseumDataModel} from '../models/AppModels';

@Component({
  selector: 'app-art-objects-list-item',
  templateUrl: './art-objects-list-item.component.html',
  styleUrls: ['./art-objects-list-item.component.css']
})
export class ArtObjectsListItemComponent {
  @Input() artObject: MuseumDataModel;
  @Output() clickedOnImage = new EventEmitter();

  clickedOnTile() {
    this.clickedOnImage.emit(this.artObject);
  }
}
