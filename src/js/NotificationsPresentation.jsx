import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import {NotificationService} from 'NotificationService';

export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        //just for presentation sake
        NotificationService.addWarning("beware of the dogg");
        NotificationService.addInfo("just FYI");
        NotificationService.addError("oh shit!");
        NotificationService.addOk("saul goodman");
        this.state = {position: "left"};
    }

    render() {
        return (
            <div style={{height: "95vh"}}>
                <NotificationsContainer position={this.state.position} store={NotificationService.getStore()}/>
                <div style={{position: "absolute", bottom: "10px"}}>
                    <button onClick={() => {NotificationService.addWarning("I warn you!")}}>Add Warning</button>
                    <button onClick={() => {NotificationService.addError("Something went wrong")}}>Add Error</button>
                    <button onClick={() => {NotificationService.addOk("Finished successfully!")}}>OK</button>
                    <button onClick={() => {NotificationService.addInfo("Information is power")}}>Add Info</button>

                    <button onClick={() => {this.setState({position: "left"})}}>Left</button>
                    <button onClick={() => {this.setState({position: "top"})}}>Top</button>
                    <button onClick={() => {this.setState({position: "bottom"})}}>Bottom</button>
                    <button onClick={() => {this.setState({position: "right"})}}>Right</button>
                </div>
            </div>
        );
    }
}
