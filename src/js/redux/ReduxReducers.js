import * as actionTypes from "./ReduxActionTypes";


export const initialState = {
    notifications: [],
    autoRemovalTimeout: null,
    notificationTypes: {
        ERROR: "error",
        WARNING: "warning",
        INFO: "info",
        OK: "ok",
        PLACEHOLDER: "placeholder"
    },
    notificationIcons: {
        error: "fa fa-exclamation-circle",
        warning: "fa fa-exclamation-triangle",
        info: "fa fa-info-circle",
        ok: "fa fa-check-circle"
    }
};

export function reducer(state = initialState, action = {type: actionTypes.INIT_STATE}) {
    let newState = Object.assign({}, state); //clone current state, since redux is an immutable objects store

    //remove all old placeholders
    // //TODO change placeholder removal timeout to something dynamic
    let notifications = state.notifications.filter((el) => {
        return (el.type.localeCompare(state.notificationTypes.PLACEHOLDER) === 0)
            ? !(Date.now() - el.createdAt > 2000)
            : !(el.removed && (Date.now() - el.createdAt > 2000));
    });

    if (action.type === actionTypes.INIT_STATE) {
        return newState;
    }

    else if (action.type === actionTypes.ADD_NOTIFICATION) {
        notifications.push(_generateNotification(state.notificationTypes.OK, action.message, action.autoRemovalTimeout, action.icon));
    }
    else if (action.type === actionTypes.ADD_OK) {
        notifications.push(_generateNotification(state.notificationTypes.OK, action.message, action.autoRemovalTimeout, action.icon));
    }

    else if (action.type === actionTypes.ADD_INFO) {
        notifications.push(_generateNotification(state.notificationTypes.INFO, action.message, action.autoRemovalTimeout, action.icon));
    }

    else if (action.type === actionTypes.ADD_ERROR) {
        notifications.push(_generateNotification(state.notificationTypes.ERROR, action.message, action.autoRemovalTimeout, action.icon));
    }

    else if (action.type === actionTypes.ADD_WARNING) {
        notifications.push(_generateNotification(state.notificationTypes.WARNING, action.message, action.autoRemovalTimeout, action.icon));
    }

    else if (action.type === actionTypes.REMOVE_NOTIFICATION) {
        console.log("removing: " + action.id);
        //set the notification to be removed
        notifications[notifications.findIndex(el => el.id === action.id)].removed = true;
        //add a decorative placeholder to imitate all queue going up
        let placeholder = _generateNotification(state.notificationTypes.PLACEHOLDER, "");
        console.log("adding placeholder: " + placeholder.id);
        notifications.splice(notifications.findIndex(el => el.id === action.id), 0, placeholder);
    } else if (action.type === actionTypes.PURGE_NOTIFICATION) {
        notifications = notifications.slice().filter(el => el.id !== action.id && !el.removed);
    }

    else if (action.type === actionTypes.SET_AUTO_REMOVAL_TIMEOUT) {
        newState.autoRemovalTimeout = (!Number.isInteger(action.timeout) || action.timeout < 0) ? null : action.timeout;
    }

    else if (action.type === actionTypes.PURGE_NOTIFICATION) {
        notifications = notifications.slice().filter(el => el.id !== action.id && !el.removed);
    }

    newState.notifications = notifications.slice();
    return newState;

}

//TODO replace with normal hash function generator
function _generateId() {
    let size = 10000000;
    return Math.floor((Math.random() * size));
}

function _generateNotification(type, content, autoRemovalTimeout) {
    return {id: _generateId(), type: type, content: content, removed: false, createdAt: Date.now(), autoRemovalTimeout: autoRemovalTimeout}
}