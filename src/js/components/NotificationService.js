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
    notify(className, content, autoRemovalTimeout, icon) {
        this.store.dispatch(ReduxActions.addNotification(className, content, false, autoRemovalTimeout, icon));
    }

    error(content) {
        this.notify("default--error", content, null, null);
    }

    info(content) {
        this.notify("default--info", content, null, null);
    }

    ok(content) {
        this.notify("default--ok", content, null, null);
    }

    warning(content) {
        this.notify("default--warning", content, null, null);
    }





}

export let NotificationService = new EventService();
