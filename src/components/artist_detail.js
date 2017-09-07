import React, {Component} from 'react';
import {connect} from 'react-redux';
import VoteBar from './vote_bar';
import {Collapse} from "reactstrap";

class ArtistDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showVoteBar: false,
            showThankYouMessage: false,
            showInfo: false
        }
    }

    toggleInfoBar(){
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    toggleVoteBar() {
        this.setState({
            showVoteBar: !this.state.showVoteBar
        })
    };

    handleVoteBar() {
        return this.state.showVoteBar ? <VoteBar/> : null
    }


    render() {

        console.log(this.props.artist.hexColor);

        if (!this.props.artist.id) {
            return (
                <div className="container">
                    <h1>
                        Select an artist to begin
                    </h1>
                </div>
            )
        }
        const nameStyle = {
            fontSize: "1.5em",
            color: this.props.artist.hexColor,
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
        };
        console.log(nameStyle);
        return (

            <div className="artist-detail-content">
                <h1>Details on: <span style={nameStyle}>{this.props.artist.name}</span></h1>
                <div className="row" id="artist-container">
                    <div className="col-md-6 col-lg-6">
                        <div className="pull-left"><img style={{borderColor: this.props.artist.hexColor}}
                                                        id="artistPicture" src={this.props.artist.imageUrl}/></div>
                        <div id="artist-bio"><p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p></div>
                    </div>
                    <div className="col-lg-6">
                        <div id="artist-scores" style={{backgroundColor: this.props.artist.hexColor}}
                             className="container">
                            <div>
                                <h1 className="scoreEntry">
                                    Wordplay: {Math.round(this.props.artist.wordplayAverage * 10) / 10}</h1>
                                <h1 className="scoreEntry">
                                    Flow: {Math.round(this.props.artist.flowAverage * 10) / 10}</h1>
                                <h1 className="scoreEntry">
                                    Consistency: {Math.round(this.props.artist.consistencyAverage * 10) / 10}</h1>
                                <h1 className="scoreEntry">
                                    Influence: {Math.round(this.props.artist.influenceAverage * 10) / 10}</h1>
                                <h1 className="scoreEntry">
                                    Bangers: {Math.round(this.props.artist.bangersAverage * 10) / 10}</h1>
                                <hr/>
                                <h1 className="scoreEntry">
                                    Total: {Math.round(this.props.artist.totalScore * 10) / 10}</h1>
                            </div>


                        </div>
                    </div>

                </div>


                <hr/>
                <div id="buttonContainer">
                    <button id="voteButton" className="btn btn-info" onClick={() => this.toggleInfoBar()}>More Info</button>
                </div>
                <Collapse isOpen={this.state.showInfo}>
                    <div className="container">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
                            humour, or non-characteristic words etc.
                        </p>
                    </div>
                </Collapse>
                <hr/>
                <div id="buttonContainer">
                    <button id="voteButton" className="btn btn-info" onClick={() => this.toggleVoteBar()}>Vote</button>
                </div>

                <Collapse isOpen={this.state.showVoteBar}>
                    {this.handleVoteBar()}
                </Collapse>
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