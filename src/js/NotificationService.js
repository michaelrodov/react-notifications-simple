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
    addWarning(text, autoRemovalTimeout) {
        this.store.dispatch(ReduxActions.addWarning(text, false, autoRemovalTimeout));
    }

    addOk(text, autoRemovalTimeout) {
        this.store.dispatch(ReduxActions.addOK(text, false, autoRemovalTimeout));
    }

    addError(text, autoRemovalTimeout) {
        this.store.dispatch(ReduxActions.addError(text, false, autoRemovalTimeout));
    }

    addInfo(text, autoRemovalTimeout) {
        this.store.dispatch(ReduxActions.addInfo(text, false, autoRemovalTimeout));
    }



}

export let NotificationService = new EventService();
