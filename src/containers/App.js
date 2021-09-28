import React, { Component } from 'react';
import { connect } from 'react-redux';

import { User } from '../components/User';
import { Page } from '../components/Page';

import { setYear } from '../actions/PageActions';


//import '../App.css';

class App extends Component {
    render() {

        const { user, page, setYearAction } = this.props;

        return (
            <div className="app">
                <Page year={ page.year } photos={ page.photos } setYear={ setYearAction }/>
                <User name={ user.name }/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
