import React from 'react';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ItemNav() {
    return (
        <ul className="navbar">
            <li>
                <NavLink
                    to="/"
                    exact
                    activeStyle={{ color: 'black' }}
                    className="nav-link"
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about"
                    activeStyle={{ color: 'black' }}
                    className="nav-link"
                >
                    About
                </NavLink>
            </li>
        </ul>
    );
}

ItemNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateItem: PropTypes.func.isRequired
};

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: ''
        };

        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(selectedTab) {
        this.setState({ selectedTab });
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <div>
                <ItemNav selected={selectedTab} onUpdateItem={this.updateTab} />
            </div>
        );
    }
}
