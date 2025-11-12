export type GeocodingResponse = Array<{
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  lat: string
  lon: string
  class: string
  type: string
  place_rank: number
  importance: number
  addresstype: string
  name: string
  display_name: string
  boundingbox: string[]
}>

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