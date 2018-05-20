import React from 'react';
import NotificationsContainer from "NotificationsContainer";
import faker from "faker";
import {NotificationService} from 'NotificationService';
import "../style/presentation.scss";


export default class NotificationsPresentation extends React.Component {
    constructor(props) {
        super(props);
        //just for presentation sake
        NotificationService.addNotification(<span>{faker.lorem.sentence()}</span>);
        NotificationService.addNotification(<span>{faker.lorem.sentence()}</span>);
        NotificationService.addNotification(<div style={{display: "flex", flexFlow:"column"}}>
            <span>{faker.lorem.sentence()}</span>
            <span><a>Retry</a></span>
        </div>);
        NotificationService.addNotification(<span>{faker.lorem.sentence()}</span>);

        this.state = {position: "top", includeCloseButton: true, includeIcon: true, themeName: "office"};
    }

    render() {
        return (
            <div style={{height: "95vh"}}>
                <NotificationsContainer position={this.state.position}
                                        autoRemovalTimeout={-1}
                                        theme={{
                                            className: this.state.themeName,
                                            includeCloseButton: this.state.includeCloseButton,
                                            includeIcon: this.state.includeIcon
                                        }}
                                        store={NotificationService.getStore()}/>



                <div style={{position: "absolute", bottom: "10px"}}>
                    <div className={"flex flex__row"}>
                        <span className={"margin-right"}>Controls</span>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.addWarning(faker.lorem.sentence())
                        }}>Add Warning
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.addError(faker.lorem.sentence(), 99999)
                        }}>Add Error
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.addOk(faker.lorem.sentence())
                        }}>OK
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.addInfo(faker.lorem.sentence())
                        }}>Add Info
                        </button>
                    </div>
                    <div>
                        <span className={"margin-right"}>Configs</span>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({position: "left"})
                        }}>position=left
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({position: "top"})
                        }}>position=top
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({position: "bottom"})
                        }}>position=bottom
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({position: "right"})
                        }}>position=right
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({includeCloseButton: !this.state.includeCloseButton})
                        }}>{"includeCloseButton=" + this.state.includeCloseButton}</button>
                        <button className={"margin-right"} onClick={() => {
                            this.setState({includeIcon: !this.state.includeIcon})
                        }}>{"includeIcon=" + this.state.includeIcon}</button>
                    </div>
                </div>
            </div>
        );
    }
}
