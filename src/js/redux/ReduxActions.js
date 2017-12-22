import * as actionTypes from "./ReduxActionTypes";

export function addInfo(message, isTop) {
    return {
        type: actionTypes.ADD_INFO,
        message: message
    }
}

export function addOK(message, isTop) {
    return {
        type: actionTypes.ADD_OK,
        message: message
    }
}
export function addError(message, isTop) {
    return {
        type: actionTypes.ADD_ERROR,
        message: message
    }
}

export function addWarning(message, isTop) {
    return {
        type: actionTypes.ADD_WARNING,
        message: message
    }
}

export function removeNotification(id) {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
        id: id
    }
}
