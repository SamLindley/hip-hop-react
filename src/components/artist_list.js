import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArtists} from "../actions/index";
import ArtistDetail from "./artist_detail";
import {selectArtist} from "../actions/index";
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class Artists extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        return (
            <div className="artistList container">
                {this.renderArtists()}
            </div>
        )
    }

    renderDetails(id) {
        console.log(this.props.selectedArtist.id);
        if (id === this.props.selectedArtist.id) {
            return <div>selected</div>
        }
    }

    renderArtists() {
        console.log(this.props);
        return _.map(this.props.artists, artist => {

            return (
                <div
                    className="artistInfo"
                    key={artist.id}
                    onClick={() => this.props.selectArtist(artist)}
                >
                    <h1>
                        {artist.name}
                    </h1>
                    <h1>

                    </h1>
                    <ArtistDetail/>
                    <div>
                        {this.renderDetails(artist.id)}
                    </div>

                    <hr/>
                </div>
            )
        })
    }

}

function mapStateToProps(state) {
    return {
        artists: state.artists,
        selectedArtist: state.selectedArtist
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectArtist: selectArtist}, dispatch)
}

export default connect(mapStateToProps, {
    mapDispatchToProps,
    fetchArtists: fetchArtists,
    selectArtist: selectArtist
})(Artists);