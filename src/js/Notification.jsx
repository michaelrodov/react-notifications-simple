import React from 'react';
import PropTypes from 'prop-types';
import "notification";
import * as NotificationService from "NotificationService";

export default class Notification extends React.PureComponent {
    constructor(props) {
        super(props);

        let closeButtonDom = <div style={{width: "15px"}}/>;

        if (this.props.includeCloseButton) {
            closeButtonDom = <span className={"notification-close flex"}>
                <i className="fa fa-times" aria-hidden="true"/>
            </span>;
        }


        let iconElement = (!this.props.icon)
            ? null
            : <span className={"flex flex__justify-center"}>{this.props.icon}</span>;

        this.state = {
            iconElement: iconElement,
            closeButtonDom: closeButtonDom
        }
    }


    //
    // //react < 16
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.includeIcon !== this.props.includeIcon) {
    //         let iconElement = (!nextProps.includeIcon || !nextProps.icon)
    //             ? null
    //             : <span className={"flex flex__justify-center"}><i className={"notification-icon " + nextProps.icon} aria-hidden="true"/></span>;
    //
    //         this.setState({iconElement: iconElement});
    //     }
    // }
    //
    // //react 16+
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.includeIcon !== this.props.includeIcon) {
    //         let iconElement = (!nextProps.includeIcon || !nextProps.icon)
    //             ? null
    //             : <span className={"flex flex__justify-center"}><i className={"notification-icon " + nextProps.icon} aria-hidden="true"/></span>;
    //
    //         this.setState({iconElement: iconElement});
    //     }
    // }

    render() {
        const containerId = "container_" + this.props.id;
        const containerStyle = (this.props.removed) ? this._getNotificationTop(containerId) : {};



        return (
            <span id={containerId}
                  style={containerStyle}
                  onClick={() => NotificationService.NotificationService.remove(this.props.id)}
                  className={"flex flex__row flex__justify-between notification " + this.props.type + " " + this.props.className}>
                <span className={"flex flex__row flex__justify_start"}>
                    {this.state.iconElement}
                    <span id={"message"} className={"notification-message"}>{this.props.content}</span>
                </span>
                {this.state.closeButtonDom}
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
    content: PropTypes.node,
    icon: PropTypes.node,
    removed: PropTypes.bool,
    includeCloseButton: PropTypes.bool,
    destructor: PropTypes.func,
    onClick: PropTypes.func
};

Notification.defaultProps = {
    className: "",
    style: {},
    type: "",
    includeCloseButton: false,
    destructor: null,
    icon: null
};

