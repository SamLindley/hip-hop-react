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
            <div className="row">
                <div className="col-lg-3">
                    {this.renderArtists()}
                </div>
                <div className="col-lg-9 artist-detail">
                    <ArtistDetail/>
                </div>
            </div>

        )
    }

    renderArtists() {
        return _.map(this.props.artists, artist => {
            return (
                <div
                    className="artist-list-entry"
                    key={artist.id}
                    onClick={() => this.props.selectArtist(artist)}
                >
                    <h1 className="artist-name">
                        {artist.name}
                    </h1>
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

export default connect(mapStateToProps, {
    fetchArtists: fetchArtists,
    selectArtist: selectArtist
})(Artists);