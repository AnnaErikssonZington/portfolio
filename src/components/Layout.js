import React from 'react';
import Home from './Home';
import About from './About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Layout = ({ props }) => {
    const getPageFromUID = (uid, item) => {
        switch (uid) {
            case 'home':
                return (
                    <Route
                        exact
                        path="/"
                        render={props => <Home props={item} />}
                        key={uid}
                    />
                );
            case 'about':
                return (
                    <Route
                        exact
                        path="/about"
                        render={props => <About props={item} />}
                        key={uid}
                    />
                );
            default:
                return <></>;
        }
    };

    return (
        <React.Fragment>
            <Router>
                {props.data &&
                    props.data.map(item => getPageFromUID(item.uid, item))}
            </Router>
        </React.Fragment>
    );
};
export default Layout;
