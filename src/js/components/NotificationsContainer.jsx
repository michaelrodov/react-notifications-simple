import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import FadingPlaceholder from "FadingPlaceholder";
import * as ReduxActions from "redux/ReduxActions";

import "notification-container.scss";
import "flex.scss";
import "animations.scss";


export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);

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

    componentDidMount(){
        this.props.store.subscribe(this._reduxStateChanged.bind(this));
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.autoRemovalTimeout !== this.props.autoRemovalTimeout){
            this.props.store.dispatch(ReduxActions.setAutoRemovalTimeout(this.props.autoRemovalTimeout));
        }
    }

    render() {
        let reduxState = this.props.store.getState();

        let notificationsList = reduxState.notifications.map((el) => {
            if (el.type.localeCompare(reduxState.notificationTypes.PLACEHOLDER) !== 0) {
                let className = "notification " + ((!el.type) ? " default--default " : el.type);
                let slideClass = ((el.removed) ? "removed " + this.state.slideOut : this.state.slideIn);

                return <Notification key={el.id}
                                     id={el.id}
                                     content={el.content}
                                     store={this.props.store}
                                     icon={el.icon}
                                     removed={el.removed}
                                     includeCloseButton={this.props.theme.includeCloseButton}
                                     className={className + " " + slideClass}
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

