export interface Reviews {
  author:         string;
  author_details: AuthorDetails;
  content:        string;
  created_at:     Date;
  id:             string;
  updated_at:     Date;
  url:            string;
}

export interface AuthorDetails {
  name:        string;
  username:    string;
  avatar_path: string;
  rating:      number;
}

export interface IntroReview {
  id: number;
  page: number;
  results: Reviews[];
  total_pages: number;
  total_reviws: number;
}
