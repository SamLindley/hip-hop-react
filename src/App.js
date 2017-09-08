import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from "./components/landing_page";
import NavBar from "./components/navbar";
import './App.css';
import Artists from './components/artist_list';
import ArtistDetail from './components/artist_detail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Base from "./components/base_component";


class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar/>
                <BrowserRouter>
                    <div className="container">
                        <Base/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
