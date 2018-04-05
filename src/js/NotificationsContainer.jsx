import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import FadingPlaceholder from "FadingPlaceholder";
import * as ReduxActions from "./redux/ReduxActions";

import "notification-container.scss";
import "flex.scss";
import "animations.scss";
import {NotificationService} from "./NotificationService";


export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.store.subscribe(this._reduxStateChanged.bind(this));


        const slideIns = {
            left: "animate__slide_right",
            right: "animate__slide_left",
            top: "animate__slide_bottom",
            bottom: "animate__slide_top"
        };
        const slideOuts = {
            left: "animate__slide_left",
            right: "animate__slide_right",
            top: "animate__slide_top",
            bottom: "animate__slide_bottom"
        };
        const starts = {
            left: "start-left",
            right: "start-right",
            top: "start-top",
            bottom: "start-bottom"
        };

        this.state = {
            reduxState: this.props.store.getState(),
            slideIn: "animate__slide_in",
            slideOut: "animate__slide_out",
            containerClass: starts[this.props.position]
        };

        this.props.store.dispatch(ReduxActions.setAutoRemovalTimeout(this.props.autoRemovalTimeout));
    }

    //before react 16
    //TODO: REFACTOR | Remove after react 15 EOL
    componentWillReceiveProps(nextProps){
        if(nextProps.setAutoRemovalTimeout !== this.props.autoRemovalTimeout){
            this.props.store.dispatch(ReduxActions.setAutoRemovalTimeout(nextProps.autoRemovalTimeout));
        }
    }

    //react 16+
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.setAutoRemovalTimeout !== this.props.autoRemovalTimeout){
            this.props.store.dispatch(ReduxActions.setAutoRemovalTimeout(nextProps.autoRemovalTimeout));
        }
    }

    render() {
        console.dir(this.state.notifications);
        let reduxState = this.props.store.getState();

        let notificationsList = reduxState.notifications.map((el) => {
            if (el.type.localeCompare(reduxState.notificationTypes.PLACEHOLDER) !== 0) {

                return <Notification key={el.id}
                                     id={el.id}
                                     text={el.text}
                                     store={this.props.store}
                                     removed={el.removed}
                                     includeCloseButton={this.props.theme.includeCloseButton}
                                     includeIcon={this.props.theme.includeIcon}
                                     className={this.props.theme.className + " " + ((el.removed) ? "removed " + this.state.slideOut : this.state.slideIn)}
                                     destructor={() => {
                                         const timeout = ((!Number.isInteger(el.autoRemovalTimeout) || el.autoRemovalTimeout < 0) ? null : el.autoRemovalTimeout)
                                                            || reduxState.autoRemovalTimeout;
                                         if(!!timeout){
                                             setTimeout(() => {this.props.store.dispatch(ReduxActions.removeNotification(el.id))},timeout);
                                         }

                                     }}
                                     type={el.type}/>
            } else {
                return <FadingPlaceholder key={el.id} id={el.id}/>
            }

        });

        let notificationsDom = <span className={"flex flex__column flex__justify-start " + this.props.position}
                                     style={{position: "relative"}}>
                                    {notificationsList}
                                </span>;

        return (<span className={"notifications-container " + this.props.position}>{notificationsDom}</span>)
    }

    _reduxStateChanged() {
        this.setState({reduxState: this.props.store.getState()});
    }


}


NotificationsContainer.propTypes = {
    position: PropTypes.string,
    store: PropTypes.object,
    theme: PropTypes.object,
    autoRemovalTimeout: PropTypes.number
};

NotificationsContainer.defaultProps = {
    position: "right-top",
    theme: {
        className: 'cartoons',
        includeCloseButton: false,
        includeIcon: true
    }
};

