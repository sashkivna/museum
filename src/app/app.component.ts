import {Component, OnInit} from '@angular/core';
import {RijksmuseumApiService} from './rijksmuseum-api.service';
import {MuseumDataModel, SearchParams} from './models/AppModels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  artObjects: Array<MuseumDataModel>;
  selectedArtObjectNumber;
  selectedArtObjectDetails;
  totalItems = 0;

  constructor(private museumApiService: RijksmuseumApiService) {
  }

  itemsOnPage: number;
  currentPage: number;
  sortingParam = '';
  searchParam = '';

  ngOnInit() {
    this.getArtObjects(this.searchParam, this.sortingParam, 10, 1);
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

  getSelectedArtObjectDetails() {
    this.selectedArtObjectDetails = undefined;

    this.museumApiService
      .getDetails(this.selectedArtObjectNumber)
      .subscribe((response: any) => {
        this.selectedArtObjectDetails = response.artObject;
      });
  }

  selectArtObject(artObjectToSelect) {
    this.selectedArtObjectNumber = artObjectToSelect.objectNumber;
    this.getSelectedArtObjectDetails();
  }

  isSelected(artObject) {
    return artObject.objectNumber === this.selectedArtObjectNumber;
  }

  onSearch($event, searchQuery) {
    this.searchParam = searchQuery;
    $event.preventDefault();
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
}
