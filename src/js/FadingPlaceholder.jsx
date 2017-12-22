import React from "react";
import PropTypes from 'prop-types';
import "notification";
import "animations";


export default class FadingPlaceholder extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<span className={this.props.className + " fadingPlaceholder animate__fading_placeholder"}/>)

    }
}

FadingPlaceholder.propTypes = {
    className: PropTypes.string
};

FadingPlaceholder.defaultProps = {
    className: ""
};
