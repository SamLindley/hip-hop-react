import {combineReducers} from 'redux';
import ArtistReducer from './artist_reducer'
import SelectedArtistReducer from './selected_artist_reducer';
import LogInReducer from './log_in_reducer';
import CurrentUserReducer from './current_user_reducer';
import {reducer as formReducer} from 'redux-form';
import PostRatingsReducer from './post_ratings_reducer';

const rootReducer = combineReducers({
    artists: ArtistReducer,
    selectedArtist: SelectedArtistReducer,
    isLoggedIn: LogInReducer,
    ratingsPosted: PostRatingsReducer,
    currentUser: CurrentUserReducer,
    form: formReducer
});

export default rootReducer;