import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageService} from '../page.service';
import {PaginationInterface, SearchParams} from '../models/AppModels';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  private _totalItems: number;
  rageOfItemsPerPage = [10, 50, 100];

  get totalItems(): number {
    return this._totalItems;
  }

  @Input() set totalItems(value: number) {
    this._totalItems = value;
    this.reCalculatePaginationNumbers();
  }

  @Output() searchByParams = new EventEmitter<SearchParams>();

  currentPageNumber = 1;
  paginationData: PaginationInterface;
  itemsPerPage = 10;

  constructor(private pageService: PageService) {
  }

  setPage(value: number): void {
    this.currentPageNumber = value;
    this.searchByParams.emit({itemsPerPage: this.itemsPerPage, currentPage: this.currentPageNumber});

    this.reCalculatePaginationNumbers();
  }

  setAmountOfPage(amount: number): void {
    this.itemsPerPage = amount;
    this.reCalculatePaginationNumbers();

    this.searchByParams.emit({itemsPerPage: this.paginationData.itemsOnPage, currentPage: this.paginationData.currentPage});
  }

  reCalculatePaginationNumbers() {
    this.paginationData = this.pageService.getPage(this.totalItems, this.currentPageNumber, this.itemsPerPage);
  }
}
