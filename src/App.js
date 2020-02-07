import React from 'react';

import './styles/App.css';

import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// const apiEndpoint = 'https://annasportfolio.cdn.prismic.io/api/v2';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
};

export default App;
