import setStore from "redux/ReduxStore";
import * as ReduxReducers from "redux/ReduxReducers";
import * as ReduxActions from "redux/ReduxActions";


//TODO add notification decorator
class EventService {
    constructor() {
       this.store = setStore(ReduxReducers.reducer);

    }

    getStore() {
        return this.store;
    }


    getNotifications() {
        return this.store.getState().notifications;
    }


    remove(id) {
        this.store.dispatch(ReduxActions.removeNotification(id));
    }

    //todo add notification disappearence timeout. as a global setting, and as an option per notification
    notification(className, content, autoRemovalTimeout, icon) {
        this.store.dispatch(ReduxActions.addNotification(className, content, false, autoRemovalTimeout, icon));
    }

    errorNotification(content) {
        this.notification("default--error", content, null, null);
    }

    infoNotification(content) {
        this.notification("default--info", content, null, null);
    }

    okNotification(content) {
        this.notification("default--ok", content, null, null);
    }

    warningNotification(content) {
        this.notification("default--warning", content, null, null);
    }





}

export let NotificationService = new EventService();
