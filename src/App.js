import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from "./components/landing_page";
import NavBar from "./components/navbar";
import './App.css';
import Artists from './components/artist_list';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar/>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route path="/artists" component={Artists}/>
                            <Route path="/" component={LandingPage}/>

                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
