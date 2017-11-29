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
                <NotificationsContainer position={"left"}/>
                <button onClick={() => {
                    eventService.addWarning("I warn you!")
                }}>Add Warning
                </button>

                <button onClick={() => {
                    eventService.removeTop()
                }}>Remove Top
                </button>

                <button onClick={() => {
                    eventService.addError("Something went wrong")
                }}>Add Error
                </button>

                <button onClick={() => {
                    eventService.addOk("Finished successfully!")
                }}>OK
                </button>

                <button onClick={() => {
                    eventService.addInfo("Information is power")
                }}>Add Info
                </button>
            </div>
        );
    }
}
