import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RijksmuseumApiService {
  constructor(private httpClient: HttpClient) {}

  getAll(searchQuery: string, parameter: string, itemsPerPage: string, pageNumber: string) {
    return this.httpClient.get('https://www.rijksmuseum.nl/api/en/collection', {
      params: {
        format: 'json',
        key: '0pjMrPUP',
        imgonly: 'true',
        q: searchQuery,
        S: parameter,
        ps: itemsPerPage,
        p: pageNumber
      }
    });
  }

  getDetails(objectNumber: string) {
    return this.httpClient.get(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}`, {
      params: {
        format: 'json',
        key: '0pjMrPUP'
      }
    });
  }
}
