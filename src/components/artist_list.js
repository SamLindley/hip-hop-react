import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArtists} from "../actions/index";
import ArtistDetail from "./artist_detail";
import {selectArtist} from "../actions/index";
import {newArtistSelected} from "../actions/index";
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import ReactDom, {findDOMNode} from "react-dom";


class Artists extends Component {


    componentDidMount(){
        this.props.fetchArtists();
        let elem = ReactDom.findDOMNode(this);
        console.log(elem);
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        window.requestAnimationFrame(function () {
            // Now set a transition on the opacity
            elem.style.transition = "opacity 7000ms";
            // and set the opacity to 1
            elem.style.opacity = 1;
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-3">
                    {this.renderArtists()}
                </div>
                <div className="col-lg-9 artist-detail">
                    <ArtistDetail key={this.props.selectedArtist}/>
                </div>
            </div>

        )
    }

    handleArtistClicked(artist){
        this.props.selectArtist(artist);
        this.props.newArtistSelected(true);
    }

    renderArtists() {
        return _.map(this.props.artists, artist => {
            return (
                <div
                    className="artist-list-entry"
                    key={artist.id}
                    onClick={() => this.handleArtistClicked(artist)}
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
    selectArtist: selectArtist,
    newArtistSelected: newArtistSelected
})(Artists);