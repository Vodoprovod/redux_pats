import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';

class App extends Component {
    render() {

        const { name } = this.props.user;
        const { year, photos } = this.props.page;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <p className="App-intro">
                    Привет из App, { name }!
                </p>
                <p>У тебя { photos.length } фоток за { year } год.</p>
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
