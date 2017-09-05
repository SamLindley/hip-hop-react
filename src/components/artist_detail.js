import React, {Component} from 'react';
import {connect} from 'react-redux';
import VoteBar from './vote_bar';
import {Field, reduxForm} from 'redux-form';

class ArtistDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showVoteBar: false
        }
    }

    toggleVoteBar() {
        if (this.state.showVoteBar) {
            this.setState({showVoteBar: false})
        } else {
            this.setState({showVoteBar: true})
        }
    };

    handleVoteBar() {
        return this.state.showVoteBar ? <VoteBar/> : <div>Click vote to vote!</div>
    }

    render() {
        if (!this.props.artist.id) {
            return (
                <div className="container">
                    <h1>
                        Select an artist to begin
                    </h1>
                </div>
            )
        }

        return (
            <div className="artist-detail-content">
                <h1>Details on: {this.props.artist.name}</h1>
                <div>
                    <h3>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </h3>
                    <hr/>
                    <div className="scores">
                        <h2>Wordplay: {Math.round(this.props.artist.wordplayAverage * 10)/10}</h2>
                        <h2>Flow: {Math.round(this.props.artist.flowAverage * 10)/10}</h2>
                    </div>
                    <hr/>
                    <button id="voteButton" className="btn btn-info" onClick={() => this.toggleVoteBar()}>Vote</button>
                    {this.handleVoteBar()}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        artist: state.selectedArtist
    }
}

export default connect(mapStateToProps)(ArtistDetail);