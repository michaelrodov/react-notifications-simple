import React from 'react';
import PropTypes from 'prop-types';
import "notification";
import * as NotificationService from "NotificationService";

export default class Notification extends React.PureComponent {
    constructor(props) {
        super(props);

        let closeButtonDom = <div className={"flex button-close"} onClick={this._close.bind(this)}/>;

        let iconElement = (!this.props.icon)
            ? null
            : <span className={"icon flex flex__justify-center"}>{this.props.icon}</span>;

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
            <div id={containerId} style={containerStyle}
                 onClick={this._clickOnBody.bind(this)}
                 className={"flex flex__row flex__justify-between notification "
                            + ((this.props.includeCloseButton) ? "" : " clickable ")
                            + this.props.type + " " + this.props.className}>
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

    _getNotificationTop(containerId) {
        const el = document.getElementById(containerId);
        return {top: el.offsetTop};
    }

    _clickOnBody(){
        if(!this.props.includeCloseButton){
            this._close();
        }
    }
    _close(){
        NotificationService.NotificationService.remove(this.props.id);
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

