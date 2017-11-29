import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import {eventService} from 'NotificationService';
import "notification-container.scss";
import "flex.scss";
import "animations.scss";

export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        eventService.register(() => {
            this.setState({notifications: eventService.getNotifications()})
        });

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
            notifications: eventService.getNotifications(),
            slideIn: slideIns[this.props.position],
            slideOut: slideOuts[this.props.position],
            containerClass: starts[this.props.position]
        }
    }

    render() {
        console.dir(this.state.notifications);


        let notificationsList = this.state.notifications.map((el) => {
            return <Notification key={el.id}
                                 id={el.id}
                                 text={el.text}
                                 className={(el.out) ? this.state.slideOut : this.state.slideIn}
                                 type={el.type} />
        });

        let notificationsDom = <span className={"flex flex__column flex__justify-start"}>
                                    {notificationsList}
                                </span>;

        return (<span className={"notifications-container " + this.props.containerClass}>{notificationsDom}</span>)
    }
}


NotificationsContainer.propTypes = {
    position: PropTypes.string
};

NotificationsContainer.defaultProps = {
    position: "right-top"
};

