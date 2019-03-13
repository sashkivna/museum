import {Injectable} from '@angular/core';
import {PaginationInterface} from './models/AppModels';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private dotsFromTheLeft: boolean;
  private dotsFromTheRight: boolean;
  private visiblePaginationRange = 9;
  private apiRestriction = 10000;

  get paginationShift() {
    return (this.visiblePaginationRange + 3) / 2;
  }

  get var() {
    return (this.visiblePaginationRange - 1) / 2;
  }


  getPage(totalItems: number, currentPage: number = 1, pageSize: number = 10): PaginationInterface {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    if (totalPages * pageSize >= this.apiRestriction ) {
      totalPages = Math.ceil(this.apiRestriction / pageSize);
    }

    if (currentPage * pageSize > this.apiRestriction) {
      currentPage = Math.ceil(this.apiRestriction / pageSize);
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= this.visiblePaginationRange) {
      // less than visiblePaginationRange total pages so show all
      startPage = 1;
      endPage = totalPages;
      this.dotsFromTheLeft = false;
      this.dotsFromTheRight = false;
    } else if (currentPage <= this.paginationShift && totalPages > currentPage + this.paginationShift) {
      // more than 10 total pages so calculate start and end pages
      startPage = 1;
      endPage = 10;
      this.dotsFromTheLeft = false;
      this.dotsFromTheRight = true;
    } else if (currentPage > this.paginationShift && totalPages > currentPage + this.paginationShift) {
      startPage = currentPage - this.var;
      endPage = currentPage + this.var + 1;
      this.dotsFromTheLeft = true;
      this.dotsFromTheRight = true;
    } else {
      startPage = currentPage - this.var;
      endPage = totalPages + 1;
      this.dotsFromTheLeft = true;
      this.dotsFromTheRight = false;
    }

    // create an array of pages to ng-repeat in the pager control
    const pages = [];

    for (let i = startPage; i < endPage; i++) {
      pages.push(i);
    }

    // return object with all page properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      pages,
      dotsFromTheLeft: this.dotsFromTheLeft,
      dotsFromTheRight: this.dotsFromTheRight
    };
  }
}
