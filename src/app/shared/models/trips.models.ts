export interface TripResponse {
  items: Trip[];
  total: number;
  page: number;
  limit: number;
}

export interface Trip {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  thumbnailUrl: string;
  price: number;
  tags: string[];
  co2: number;
  rating: number;
  nrOfRatings: number;
  imageUrl: string;
  verticalType: string;
}

export type SortBy =
  | 'title'
  | 'price'
  | 'rating'
  | 'creationDate'
  | 'verticalType';

export interface TripFilters {
  name: string | null;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sortBy: string | null;
  sortOrder: boolean | null;
}

export interface TripsPagination {
  page: number;
  limit: number;
}
