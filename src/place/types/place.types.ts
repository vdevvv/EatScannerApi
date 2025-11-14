export type GooglePlaceResponse = {
  candidates: Array<{
    geometry: {
      location: {
        lat: number
        lng: number
      }
      viewport: {
        northeast: {
          lat: number
          lng: number
        }
        southwest: {
          lat: number
          lng: number
        }
      }
    }
    name: string
    place_id: string
    rating: number
    user_ratings_total: number
  }>
  status: string
}

export type GoogleRatingResponse = {
  html_attributions: [],
  result: GoogleRating,
  status: string
}

export interface GoogleRating {
  name: string;
  rating?: number;
  user_ratings_total?: number;
}