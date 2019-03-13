import {Component, OnInit} from '@angular/core';
import {RijksmuseumApiService} from './rijksmuseum-api.service';
import {MuseumDataModel, SearchParams} from './models/AppModels';
import { DataTransferService} from './data-transfer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  artObjects: Array<MuseumDataModel>;
  selectedArtObjectDetails;
  totalItems = 0;
  itemsOnPage: number;
  currentPage: number;
  sortingParam = '';
  searchParam = '';

  showOutlet = true;
  private showModal: boolean;

  constructor(private museumApiService: RijksmuseumApiService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.getArtObjects(this.searchParam, this.sortingParam, 10, 1);

    this.dataTransferService.onSort.subscribe(
      (value: string) => {
        this.sortingParam = value;
        this.onSort(value);
      }
    );

    this.dataTransferService.onSearch.subscribe(
      (value: string) => {
        this.searchParam = value;
        this.onSearch(value, null);
      }
    );
  }

  getArtObjects(searchQuery, parameter, itemsOnPage, pageNumber) {
    this.museumApiService
      .getAll(searchQuery, parameter, itemsOnPage, pageNumber)
      .subscribe((response: any) => {
        if (response && response.artObjects) {
          this.artObjects = response.artObjects;
          this.totalItems = response.count;
        }
      });
  }


  selectArtObject(selectedItem: MuseumDataModel) {
    this.selectedArtObjectDetails = selectedItem;
    this.showModal = true;
  }


  onSearch(searchQuery, $event) {
    this.searchParam = searchQuery;

    if ($event) {
      $event.preventDefault();
    }

    this.getArtObjects(this.searchParam, this.sortingParam, this.itemsOnPage, this.currentPage);
  }

  onSort(parameter) {
    this.sortingParam = parameter;
    this.getArtObjects(this.searchParam, this.sortingParam, this.itemsOnPage, this.currentPage);
  }


  findDataByParams(params: SearchParams) {
    this.itemsOnPage = params.itemsPerPage;
    this.currentPage = params.currentPage;
    this.getArtObjects('', this.sortingParam, this.itemsOnPage, this.currentPage);
  }

  toggleOutlet() {
    this.showOutlet = !this.showOutlet;
    this.showModal = false;
  }

  closeModal() {
    this.showModal = false;
  }
}
