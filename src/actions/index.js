import axios from 'axios';

export const FETCH_ARTISTS = 'fetch-artists';
export const SELECT_ARTIST = 'select-artist';
export const POST_RATINGS = 'post-ratings';

export function fetchArtists() {
    const request = axios.get("https://goat-service.herokuapp.com/artists");
    return {
        type: FETCH_ARTISTS,
        payload: request
    }
}

export function postRatings(id, rating) {
    const request = axios.post("https://goat-service.herokuapp.com/rating/" + id, rating);
    return {
        type: POST_RATINGS,
        payload: request
    }
}

export function selectArtist(artist){
    return {
        type: SELECT_ARTIST,
        payload: artist
    }
}