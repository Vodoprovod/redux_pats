import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {

    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year);
    };

    renderButtons = () => {
        const years = [ 2007, 2008, 2009, 2012, 2013, 2015, 2018, 2019, 2021 ];

        return years.map((item, index) => {
            return (
                <button key={ index } className="btn" onClick={ this.onBtnClick }>
                    { item }
                </button>
            )
        })
    }

    renderTemplate = () => {
        const { photos, isFetching, error } = this.props;

        if (error) {
            console.log(error);
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return photos.map(entry => (
                <div key={ entry.id } className="photo">
                    <p>
                        <img src={ entry.sizes[0].url } alt="" />
                    </p>
                    <p>{ entry.likes.count } &#10084;</p>
                </div>
            ))
        }
    };

    render() {
        const { year, photos } = this.props;

        return (
            <div className="ib page">
                <p>{ this.renderButtons() }</p>
                <h3>{ year } год [{ photos.length }]</h3>
                { this.renderTemplate() }
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired
};