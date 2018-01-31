import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import {notificationService} from 'NotificationService';

export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        //just for presentation sake
        notificationService.addWarning("beware of the dogg");
        notificationService.addInfo("just FYI");
        notificationService.addError("oh shit!");
        notificationService.addOk("saul goodman");
        this.state = {position: "left"};
    }

    render() {
        return (
            <div style={{height: "95vh"}}>
                <NotificationsContainer position={this.state.position} store={notificationService.getStore()}/>
                <div style={{position: "absolute", bottom: "10px"}}>
                    <button onClick={() => {notificationService.addWarning("I warn you!")}}>Add Warning</button>
                    <button onClick={() => {notificationService.addError("Something went wrong")}}>Add Error</button>
                    <button onClick={() => {notificationService.addOk("Finished successfully!")}}>OK</button>
                    <button onClick={() => {notificationService.addInfo("Information is power")}}>Add Info</button>

                    <button onClick={() => {this.setState({position: "left"})}}>Left</button>
                    <button onClick={() => {this.setState({position: "top"})}}>Top</button>
                    <button onClick={() => {this.setState({position: "bottom"})}}>Bottom</button>
                    <button onClick={() => {this.setState({position: "right"})}}>Right</button>
                </div>
            </div>
        );
    }
}
