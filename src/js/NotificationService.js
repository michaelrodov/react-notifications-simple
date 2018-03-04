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

    addWarning(text) {
        this.store.dispatch(ReduxActions.addWarning(text, false));
    }

    addOk(text) {
        this.store.dispatch(ReduxActions.addOK(text, false));
    }

    addError(text) {
        this.store.dispatch(ReduxActions.addError(text, false));
    }

    addInfo(text) {
        this.store.dispatch(ReduxActions.addInfo(text, false));
    }



}

export let NotificationService = new EventService();
