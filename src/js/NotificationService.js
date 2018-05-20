import setStore from "./redux/ReduxStore";
import * as ReduxReducers from "./redux/ReduxReducers";
import * as ReduxActions from "./redux/ReduxActions";


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
    addNotification(content, autoRemovalTimeout, icon) {
        this.store.dispatch(ReduxActions.addNotification(content, false, autoRemovalTimeout, icon));
    }




}

export let NotificationService = new EventService();
