import {Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RijksmuseumApiService} from '../rijksmuseum-api.service';

@Component({
  selector: 'app-extended-object-details',
  templateUrl: './extended-object-details.component.html',
  styleUrls: ['./extended-object-details.component.css']
})
export class ExtendedObjectDetailsComponent implements OnInit {

  @Input() extendedObjectDetailsComponent;
  /*@Output() extendedObjectDetailsComponent;*/

  constructor(private route: ActivatedRoute, private rijksmuseumApiService: RijksmuseumApiService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.rijksmuseumApiService
      .getDetails(id)
      .subscribe((response: any) => {
        this.extendedObjectDetailsComponent = response.artObject;
      });
  }
}
