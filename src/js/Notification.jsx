import React from 'react';
import PropTypes from 'prop-types';
import "notification";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        let types = [{type: "error", icon: "fa-times-circle"},
            {type: "warning", icon: "fa-exclamation-circle"},
            {type: "ok", icon: "fa-check-circle"},
            {type: "info", icon: "fa-info-circle"}];
        let iconClass = (!this.props.type) ? "" : "fa " + types.find((el) => el.type === this.props.type).icon;

        this.state = {
            iconClass: iconClass,
            types: types
        }
    }

    render() {
        let iconDom = <span id={"icon"} className={"notification-icon"}>
                            <i className={this.state.iconClass} aria-hidden="true"/>
                      </span>;
        return (
            <span id={"container"} className={"flex flex__row flex__justify-between notification " + this.props.type}>
                <span className={"flex flex__row flex__justify_start"}>
                    {iconDom}
                    <span id={"message"} className={"notification-message"}>{this.props.text}</span>
                </span>
                <span className={"notification-close"}><i className="fa fa-times" aria-hidden="true"/></span>
            </span>
        )
    }
}


Notification.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string,
    icon: PropTypes.string
};

Notification.defaultProps = {
    className: "",
    style: {},
    type: ""
};

