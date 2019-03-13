import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RijksmuseumApiService} from '../rijksmuseum-api.service';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-extended-object-details',
  templateUrl: './extended-object-details.component.html',
  styleUrls: ['./extended-object-details.component.css']
})
export class ExtendedObjectDetailsComponent implements OnInit {

  @Input() selectedItem;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rijksmuseumApiService: RijksmuseumApiService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.rijksmuseumApiService
      .getDetails(id)
      .subscribe((response: any) => {
        this.selectedItem = response.artObject;
      });
  }

  applyDateOnAllItemsSorting(param: string) {
    this.dataTransferService.transferParameter(param);
    this.router.navigateByUrl('');
  }

  applyDateOnAllItemsSearching(param: string) {
    this.dataTransferService.searchByTag(param);
    this.router.navigateByUrl('');
  }

  backToPrevious() {
    this.router.navigateByUrl('');
  }
}
