import React from 'react';
import NotificationsContainer from "./components/NotificationsContainer";
import faker from "faker";
import {NotificationService} from './components/NotificationService';
import "../style/presentation.scss";


export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        let customNotificationDom =
            <div style={{display: "flex", flexFlow: "column"}}>
                <span>{"This is a custom notification without icon"}</span>
                <span><a>Link</a></span>
            </div>;

        let customNotificationWithIcon =
            <div style={{display: "flex", flexFlow: "column"}}>
                <span>{"Everything worked out great!"}</span>
            </div>;

            let iconDom = <img height="20px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM5Mi42NjIgMzkyLjY2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkyLjY2MiAzOTIuNjYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjE2NzMwOyIgY3g9IjE5Ni4zMzEiIGN5PSIyNDMuNTgyIiByPSIxNDkuMDgiLz4KPGc+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMUIxQjFCOyIgZD0iTTE5Ni4zMzEsOTQuNTAyaDcuMjh2Mjk3Ljg0Yy0yLjQsMC00Ljg0LDAtNy4yOCwwcy00Ljg4LDAtNy4yOCwwVjk0LjY2MiAgICBDMTkxLjQ1MSw5NC41NDIsMTkzLjg5MSw5NC41MDIsMTk2LjMzMSw5NC41MDJ6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzFCMUIxQjsiIGQ9Ik0xOTYuMzMxLDM3LjA2MmM2LjgyOC0wLjAwMSwxMy42MDEsMS4yMTgsMjAsMy42YzAuMTk5LTAuNDM2LDAuNDQtMC44NTEsMC43Mi0xLjI0bDI1LjI4LTM2LjI4ICAgIGMyLjI5OC0zLjMxNCw2Ljg0Ni00LjEzOCwxMC4xNi0xLjg0YzMuMzE0LDIuMjk4LDQuMTM4LDYuODQ2LDEuODQsMTAuMTZsLTI1LjA4LDM2YzE4LjYzMSwxMy4wMjYsMjcuODM1LDM1LjgwOCwyMy40OCw1OC4xMiAgICBjLTM2LjEyMS0xNC43MDMtNzYuNTU5LTE0LjcwMy0xMTIuNjgsMGMtNC4zNTUtMjIuMzEyLDQuODQ5LTQ1LjA5NCwyMy40OC01OC4xMmwtMjUuMDgtMzZjLTIuMjk4LTMuMzE0LTEuNDc0LTcuODYyLDEuODQtMTAuMTYgICAgczcuODYzLTEuNDc0LDEwLjE2LDEuODRsMjUuMzIsMzYuMjhjMC4yOCwwLjM4OCwwLjUyMiwwLjgwNCwwLjcyLDEuMjRDMTgyLjg0LDM4LjI5OSwxODkuNTU3LDM3LjA4LDE5Ni4zMzEsMzcuMDYyICAgIEwxOTYuMzMxLDM3LjA2MnoiLz4KCTwvZz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzFCMUIxQjsiIGN4PSIxMjIuMzcxIiBjeT0iMjM5LjE0MiIgcj0iMjMuMiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojMUIxQjFCOyIgY3g9IjI1Mi42NTEiIGN5PSIzMDkuODIyIiByPSIyMy4yIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMxQjFCMUI7IiBjeD0iMjc1Ljg1MSIgY3k9IjE4MS43NDIiIHI9IjE5Ljg4Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMxQjFCMUI7IiBjeD0iMTQ1LjU3MSIgY3k9IjE2NS4xODIiIHI9IjE3LjY4Ii8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMxQjFCMUI7IiBjeD0iMTQxLjE3MSIgY3k9IjM1NS4wNjIiIHI9IjE3LjY4Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />;

        //just for presentation sake
        NotificationService.notification("default--error", <span>{faker.lorem.sentence()}</span>);
        NotificationService.notification("default--info", <span>{faker.lorem.sentence()}</span>);
        NotificationService.notification("notification-custom", customNotificationDom);
        NotificationService.notification("default--ok", customNotificationWithIcon, null, iconDom);
        NotificationService.notification("default--warning", <span>{faker.lorem.sentence()}</span>);

        this.state = {position: "top", includeCloseButton: true, includeIcon: true};
    }

    render() {
        return (
            <div style={{height: "95vh"}}>
                <NotificationsContainer position={this.state.position}
                                        autoRemovalTimeout={-1}
                                        theme={{
                                            includeCloseButton: this.state.includeCloseButton,
                                            includeIcon: this.state.includeIcon
                                        }}
                                        store={NotificationService.getStore()}/>


                <div style={{position: "absolute", bottom: "10px"}}>
                    <div className={"flex flex__row"}>
                        <span className={"margin-right"}>Controls</span>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.warningNotification(faker.lorem.sentence())
                        }}>Add Warning
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.errorNotification(faker.lorem.sentence(), 99999)
                        }}>Add Error
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.okNotification(faker.lorem.sentence())
                        }}>OK
                        </button>
                        <button className={"margin-right"} onClick={() => {
                            NotificationService.infoNotification(faker.lorem.sentence())
                        }}>Add Info
                        </button>
                    </div>
                    <div style={{marginTop: "15px"}}>
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
