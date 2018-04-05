import * as actionTypes from "./ReduxActionTypes";

export function addInfo(message, isTop, autoRemovalTimeout) {
    return {
        type: actionTypes.ADD_INFO,
        message: message,
        autoRemovalTimeout:autoRemovalTimeout
    }
}

export function addOK(message, isTop, autoRemovalTimeout) {
    return {
        type: actionTypes.ADD_OK,
        message: message,
        autoRemovalTimeout:autoRemovalTimeout
    }
}

export function addError(message, isTop, autoRemovalTimeout) {
    return {
        type: actionTypes.ADD_ERROR,
        message: message,
        autoRemovalTimeout:autoRemovalTimeout
    }
}

export function addWarning(message, isTop, autoRemovalTimeout) {
    return {
        type: actionTypes.ADD_WARNING,
        message: message,
        autoRemovalTimeout:autoRemovalTimeout
    }
}

export function removeNotification(id) {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
        id: id
    }
}


export function addNotification(id, type) {
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

