import { Result } from "./result.interfaces";

export interface RESTCountriesResponse {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}
