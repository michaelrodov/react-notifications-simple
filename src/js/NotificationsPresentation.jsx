import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import faker from "faker";
import {NotificationService} from 'NotificationService';

export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        //just for presentation sake
        NotificationService.addWarning(faker.lorem.sentence());
        NotificationService.addInfo(faker.lorem.sentence());
        NotificationService.addError(faker.lorem.sentence());
        NotificationService.addOk(faker.lorem.sentence());
        this.state = {position: "top"};
    }

    render() {
        return (
            <div style={{height: "95vh"}}>
                <NotificationsContainer position={this.state.position}
                                        theme={{
                                            className: "office",
                                            includeCloseButton: false,
                                            includeIcon: true
                                        }}
                                        store={NotificationService.getStore()}/>
                <div style={{position: "absolute", bottom: "10px"}}>
                    <button onClick={() => {NotificationService.addWarning("In dog we trust! sdfd fdsf ddfsdfsdf sdfs dfsdf sdfsdf sdfs dfsd fsdf sdfsd fsdf sdfsd  fsdf sdf sdfs dfs df")}}>Add Warning</button>
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
