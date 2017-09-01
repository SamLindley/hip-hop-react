import {combineReducers} from 'redux';
import ArtistReducer from './artist_reducer'
import SelectedArtistReducer from './selected_artist_reducer';

const rootReducer = combineReducers({
    artists: ArtistReducer,
    selectedArtist: SelectedArtistReducer
});

export default rootReducer;