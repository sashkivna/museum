import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataTransferService {
  private sourceOnSort = new Subject<string>();
  private sourceOnSearch = new Subject<string>();

  onSort = this.sourceOnSort.asObservable();
  onSearch = this.sourceOnSearch.asObservable();

  constructor() {
  }

  transferParameter(sortValue: string) {
    this.sourceOnSort.next(sortValue);
  }

  searchByTag(searchValue: string) {
    this.sourceOnSearch.next(searchValue);
  }
}
