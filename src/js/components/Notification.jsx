import React from 'react';
import PropTypes from 'prop-types';
import "notification.scss";
import * as NotificationService from "NotificationService";

export default class Notification extends React.PureComponent {
    constructor(props) {
        super(props);

        const closeButtonClass = (!this.props.closeButtonClass) ? "default-close-button" : this.props.closeButtonClass;
        let closeButtonDom = <div className={"flex button " + closeButtonClass} onClick={this._close.bind(this)}/>;

        let iconElement = (!this.props.icon)
            ? null
            : <span className={"icon flex flex__justify-center"}>{this.props.icon}</span>;

        this.state = {
            iconElement: iconElement,
            closeButtonDom: closeButtonDom
        }
    }

    render() {
        const containerId = "container_" + this.props.id;
        const containerStyle = (this.props.removed) ? Notification.getNotificationTop(containerId) : {};


        return (
            <div id={containerId} style={containerStyle}
                 onClick={this._clickOnBody.bind(this)}
                 className={"flex flex__row flex__justify-between notification "
                                + ((this.props.includeCloseButton) ? "" : " clickable ")
                                + this.props.type + " "
                                + this.props.className}>

                <div className={"flex flex__row flex__justify_start flex__align_items_center"}>
                    {this.state.iconElement}
                    <div id={"message"}
                         className={"notification-message"}>{this.props.content}
                    </div>
                    {this.state.closeButtonDom}
                </div>
            </div>
        )
    }


    componentDidMount() {
        this.props.destructor && this.props.destructor();
    }

    static getNotificationTop(containerId) {
        const el = document.getElementById(containerId);
        return {top: el.offsetTop};
    }

    _clickOnBody() {
        if (!this.props.includeCloseButton) {
            this._close();
        }
    }

    _close() {
        NotificationService.NotificationService.remove(this.props.id);
    }

}


Notification.propTypes = {
    className: PropTypes.string,
    closeButtonClass: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    content: PropTypes.node,
    icon: PropTypes.node,
    removed: PropTypes.bool,
    includeCloseButton: PropTypes.bool,
    destructor: PropTypes.func,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

Notification.defaultProps = {
    className: "",
    style: {},
    type: "",
    includeCloseButton: false,
    destructor: null,
    icon: null
};

