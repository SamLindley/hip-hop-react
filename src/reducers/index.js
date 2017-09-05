import {combineReducers} from 'redux';
import ArtistReducer from './artist_reducer'
import SelectedArtistReducer from './selected_artist_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    artists: ArtistReducer,
    selectedArtist: SelectedArtistReducer,
    form: formReducer
});

export default rootReducer;