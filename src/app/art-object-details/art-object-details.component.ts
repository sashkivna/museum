import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MuseumDataModel} from '../models/AppModels';

@Component({
  selector: 'app-art-object-details',
  templateUrl: './art-object-details.component.html',
  styleUrls: ['./art-object-details.component.css']
})
export class ArtObjectDetailsComponent {
  @Input() artObjectItem: MuseumDataModel;
  @Output() closeModal = new EventEmitter();

  closePopup() {
    this.closeModal.emit();
  }
}
