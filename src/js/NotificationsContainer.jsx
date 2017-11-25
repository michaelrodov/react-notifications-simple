import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import {eventService} from 'NotificationService';
import "notification-container.scss";
import "flex.scss";

export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        eventService.register(() => {
            this.setState({notifications: eventService.getNotifications()})
        });

        this.state = {
            notifications: eventService.getNotifications()
        }
     }

    render() {
        console.dir(this.state.notifications);


        let notificationsList = this.state.notifications.map((el,inx) => {
            return <Notification key={inx} text={el.text} type={el.type} />
        });

        let notificationsDom = <span className={"flex flex__column flex__justify-start"}>
                                    {notificationsList}
                                </span>;

        return (<span className={"notifications-container " + this.props.position}>{notificationsDom}</span>)
    }
}


NotificationsContainer.propTypes = {
    position: PropTypes.string
};

NotificationsContainer.defaultProps = {
    position: "right-top"
};

