import React from 'react';
import PropTypes from 'prop-types';
import Notification from "Notification";
import "notification-container.scss";
import "flex.scss";

export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        let notificationsList = this.props.notifications.map((el,inx) => {
            return <Notification key={inx} text={el.text} type={el.type} />
        });

        let notificationsDom = <span className={"flex flex__column flex__justify-start"}>
                                    {notificationsList}
                                </span>;

        return (<span className={"notifications-container " + this.props.position}>{notificationsDom}</span>)
    }
}


NotificationsContainer.propTypes = {
    notifications: PropTypes.array,
    position: PropTypes.string
};

NotificationsContainer.defaultProps = {
    notifications: [],
    position: "right-top"
};

