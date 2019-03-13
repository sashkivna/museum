export interface MuseumDataModel {
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: WebImageInterface;
  headerImage: HeaderImageInterface;
  productionPlaces: Array<string>;
}

export interface WebImageInterface {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface HeaderImageInterface {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}


export interface PaginationInterface {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  pages: Array<number>;
  dotsFromTheLeft: boolean;
  dotsFromTheRight: boolean;
}

export interface SearchParams {
  currentPage: number;
  itemsPerPage: number;
}
