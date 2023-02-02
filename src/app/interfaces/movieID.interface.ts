import { AuthorDetails, Reviews } from './Reviews.interface';
export interface ResponseByID {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}
export interface movieID {
  id: number;
  page: number;
  results: Reviews[];
  total_pages: number;
  total_reviws: number;
}

export interface MovieIDResults {
  author:         string;
  author_details: AuthorDetails;
  content:        string;
  created_at:     Date;
  id:             string;
  updated_at:     Date;
  url:            string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}
