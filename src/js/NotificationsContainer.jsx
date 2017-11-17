import React from 'react';
import PropTypes from 'prop-types';
import Notification from "./Notification";

export default class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        let notificationsList = this.props.notifications.map(el => {
            return <Notification text={el.text} type={el.type} />
        });

        let notificationsDom = <span className={"flex flex__column flex__justify-start"}>
                                    {notificationsList}
                                </span>;

        return ({notificationsDom})
    }
}


NotificationsContainer.propTypes = {
    notifications: PropTypes.array
};

NotificationsContainer.defaultProps = {
    notifications: []
};

