import axios from 'axios';

export const FETCH_ARTISTS = 'fetch-artists';
export const SELECT_ARTIST = 'select-artist';

export function fetchArtists() {
    const request = axios.get("https://goat-service.herokuapp.com/artists");
    console.log(request);
    return {
        type: FETCH_ARTISTS,
        payload: request
    }
}

export function selectArtist(artist){
    return {
        type: SELECT_ARTIST,
        payload: artist
    }
}