import * as actionTypes from "./ReduxActionTypes";

export function addNotification(className, content, isTop, autoRemovalTimeout, icon) {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        className: (!className) ? "" : className,
        message: content,
        autoRemovalTimeout:autoRemovalTimeout,
        icon: icon
    }
}

export function removeNotification(id) {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
        id: id
    }
}

export function setAutoRemovalTimeout(ms) {
    return {
        type: actionTypes.SET_AUTO_REMOVAL_TIMEOUT,
        timeout: ms
    }
}

