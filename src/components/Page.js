import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {
    render() {
        const { year, photos } = this.props;

        return (
            <div>
                <p>
                    У тебя { photos.length } фоток за { year } год.
                </p>
            </div>
        )
    }
}
