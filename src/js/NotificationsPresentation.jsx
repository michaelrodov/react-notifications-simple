import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import {eventService} from 'NotificationService';

export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        eventService.addWarning("beware of the dogg");
        eventService.addInfo("just FYI");
        eventService.addError("oh shit!");
        eventService.addOk("saul goodman");
    }

    render() {
        return (
            <div>
                <NotificationsContainer />
                <button onClick={() => {
                    eventService.addWarning("shits gonna be hot")
                }}>Add</button>
                <button onClick={() => {
                    eventService.removeTop()
                }}>remove</button>
            </div>
        );
    }
}
