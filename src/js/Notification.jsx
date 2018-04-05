import React from 'react';
import PropTypes from 'prop-types';
import "notification";
import * as NotificationService from "NotificationService";

export default class Notification extends React.PureComponent {
    constructor(props) {
        super(props);
        let reduxState = this.props.store.getState();
        // let types = [
        //     {type: reduxState.notificationTypes.ERROR, icon: "fa-exclamation-circle"},
        //     {type: reduxState.notificationTypes.WARNING, icon: "fa-exclamation-triangle"},
        //     {type: reduxState.notificationTypes.OK, icon: "fa-check-circle"},
        //     {type: reduxState.notificationTypes.INFO, icon: "fa-info-circle"}
        // ];

        // let icon = (!this.props.type) ? "" : "fa " + types.find((el) => el.type === this.props.type).icon;
        let icon = (!!this.props.icon) ? this.props.icon : reduxState.notificationIcons[this.props.type];

        let iconElement = (!this.props.includeIcon)
            ? null
            : <i className={"notification-icon " + icon} aria-hidden="true"/>;

        this.state = {
            iconElement: iconElement
        }
    }

    //react < 16
    componentWillReceiveProps(nextProps) {
        if (nextProps.includeIcon !== this.props.includeIcon) {
            let iconElement = (!nextProps.includeIcon || !nextProps.icon)
                ? null
                : <i className={"notification-icon " + nextProps.icon} aria-hidden="true"/>;

            this.setState({iconElement: iconElement});
        }
    }

    //react 16+
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.includeIcon !== this.props.includeIcon) {
            let iconElement = (!nextProps.includeIcon || !nextProps.icon)
                ? null
                : <i className={"notification-icon " + nextProps.icon} aria-hidden="true"/>;

            this.setState({iconElement: iconElement});
        }
    }

    render() {
        const containerId = "container_" + this.props.id;
        const containerStyle = (this.props.removed) ? this._getNotificationTop(containerId) : {};

        let closeButtonDom = <div style={{width: "15px"}}/>;
        if (this.props.includeCloseButton) {
            closeButtonDom =
                <span className={"notification-close flex"}><i className="fas fa-times" aria-hidden="true"/></span>;
        }

        return (
            <span id={containerId}
                  style={containerStyle}
                  onClick={() => NotificationService.NotificationService.remove(this.props.id)}
                  className={"flex flex__row flex__justify-between notification " + this.props.type + " " + this.props.className}>
                <span className={"flex flex__row flex__justify_start"}>
                    {this.state.iconElement}
                    <span id={"message"} className={"notification-message"}>{this.props.text}</span>
                </span>
                {closeButtonDom}
            </span>
        )
    }


    componentDidMount() {
        this.props.destructor && this.props.destructor();
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
    removed: PropTypes.bool,
    includeCloseButton: PropTypes.bool,
    includeIcon: PropTypes.bool,
    destructor: PropTypes.func
};

Notification.defaultProps = {
    className: "",
    style: {},
    type: "",
    includeCloseButton: false,
    includeIcon: true,
    destructor: null
};

