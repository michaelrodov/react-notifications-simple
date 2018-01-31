import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import FadingPlaceholder from "FadingPlaceholder";
import "notification-container.scss";
import "flex.scss";
import "animations.scss";


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
                                     className={(el.removed) ? "removed " + this.state.slideOut : this.state.slideIn}
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
    store: PropTypes.object
};

NotificationsContainer.defaultProps = {
    position: "right-top"
};

