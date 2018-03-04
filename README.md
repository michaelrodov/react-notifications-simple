# Simple React Notifications
The purspose of this package is to provide notifications that are simple to use and understand,
yet have enough flexability in order to use them in different [react](https://reactjs.org/) projects.

## Installation
```js
npm install react-notifications-simple
```

## Usage
You will need to include two objects in order to use the notifications module.
NotificationsContainer which contains all your notifications, its position is fixed and controlled by its "position" property
NotificationService which is the controller of the notifications, through which you can add notifications.

```javascript
import {NotificationsContainer, NotificationService} from "react-notifications-simple";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
 <NotificationsContainer position={"left"} theme={{className: "office",
                                            includeCloseButton: false,
                                            includeIcon: true}}
                                        store={NotificationService.getStore()}/>
                <div>
                    <button onClick={() => {NotificationService.addWarning("I warn you!")}}>Add Warning</button>
                    <button onClick={() => {NotificationService.addError("Something went wrong")}}>Add Error</button>
                    <button onClick={() => {NotificationService.addOk("Finished successfully!")}}>OK</button>
                    <button onClick={() => {NotificationService.addInfo("Information is power")}}>Add Info</button>
                </div>
            </div>
        );
    }
}
```


## NotificationsContainer
 * position (string): "left"/"right"/"top"/"bottom"
 * theme (object)
    * className (string): builtIn styles "office"/"cartoons" or your css class that will style notifications the way you need
    * includeCloseButton (boolean) - whether to include close button or not 
      true: only clicking on the close button will close the notification
      false: clicking on the anywhere in the notification will close it
    * includeIcon (boolean) - wheter to include notification severity icon on the left of the notification or not.      
 * store: always set to NotificationService.getStore()     
 
 ## NotificationService
  * currently has 4 functions (in the future more options will be added)
      * addWarning
      * addError
      * addOk
      * addInfo
