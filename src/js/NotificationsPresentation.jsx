import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import {notificationService} from 'NotificationService';

export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        notificationService.addWarning("beware of the dogg");
        notificationService.addInfo("just FYI");
        notificationService.addError("oh shit!");
        notificationService.addOk("saul goodman");
    }

    render() {
        return (
            <div className={"flex flex__column flex__justify-between"} style={{height: "95vh"}}>
                <NotificationsContainer position={"left"} store={notificationService.getStore()}/>
                <div>
                    <button onClick={() => {
                        notificationService.addWarning("I warn you!")
                    }}>Add Warning
                    </button>

                    <button onClick={() => {
                        notificationService.removeTop()
                    }}>Remove Top
                    </button>

                    <button onClick={() => {
                        notificationService.addError("Something went wrong")
                    }}>Add Error
                    </button>

                    <button onClick={() => {
                        notificationService.addOk("Finished successfully!")
                    }}>OK
                    </button>

                    <button onClick={() => {
                        notificationService.addInfo("Information is power")
                    }}>Add Info
                    </button>
                </div>
            </div>
        );
    }
}
