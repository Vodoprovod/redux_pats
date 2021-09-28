import React, { Component } from 'react';
import { connect } from 'react-redux';

import { User } from '../components/User';
import { Page } from '../components/Page';


import '../App.css';

class App extends Component {
    render() {

        const { user, page } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <User name={ user.name }/>
                <Page year={ page.year } photos={ page.photos }/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page
    }
};

export default connect(mapStateToProps)(App);
