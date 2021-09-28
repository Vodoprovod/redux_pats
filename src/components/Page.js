import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {

    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year);
    };

    render() {
        const { year, photos, isFetching } = this.props;

        return (
            <div className="ib page">
                <p>
                    <button className="btn" onClick={ this.onBtnClick }>2007</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2008</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2009</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2012</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2013</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2015</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2018</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2019</button>{' '}
                    <button className="btn" onClick={ this.onBtnClick }>2021</button>{' '}
                </p>
                <h3>{ year } год</h3>
                { isFetching ? <p>Загрузка...</p> : <p>У тебя { photos.length } фоток.</p> }
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};