import React from 'react';
import NotificationsContainer from "./NotificationsContainer";

export default class NotificationsPresentation extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let notifications = [
            {text: "error occured", type: "error"},
            {text: "just for your information!", type: "info"},
            {text: "Beware of the dog!", type: "warning"}
        ];
        return (
            <NotificationsContainer notifications={notifications}/>
        );
    }
}
