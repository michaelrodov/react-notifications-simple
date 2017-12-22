import React from 'react';
import PropTypes from 'prop-types';
import "notification";
import * as NotificationService from "NotificationService";

export default class Notification extends React.PureComponent {
    constructor(props) {
        super(props);
        let reduxState = this.props.store.getState();
        let types = [
            {type: reduxState.notificationTypes.ERROR, icon: "fa-times-circle"},
            {type: reduxState.notificationTypes.WARNING, icon: "fa-exclamation-circle"},
            {type: reduxState.notificationTypes.OK, icon: "fa-check-circle"},
            {type: reduxState.notificationTypes.INFO, icon: "fa-info-circle"}
        ];
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
        const containerId = "container_" + this.props.id;
        const containerStyle = (this.props.removed) ? this._getNotificationTop(containerId) : {};

        return (
            <span id={containerId}
                  style={containerStyle}
                  onClick={() => NotificationService.notificationService.remove(this.props.id)}
                  className={"flex flex__row flex__justify-between notification " + this.props.type + " " + this.props.className}>
                <span className={"flex flex__row flex__justify_start"}>
                    {iconDom}
                    <span id={"message"} className={"notification-message"}>{this.props.text}</span>
                </span>
                <span className={"notification-close"}><i className="fa fa-times" aria-hidden="true"/></span>
            </span>
        )
    }

    _getNotificationTop(containerId) {
        const el = document.getElementById(containerId);
        return {top: el.offsetTop};
    }
}


Notification.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string,
    icon: PropTypes.string,
    removed: PropTypes.bool
};

Notification.defaultProps = {
    className: "",
    style: {},
    type: ""
};

