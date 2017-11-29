export const NOTIFICATION_TYPES = {
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    OK: "ok"
};

//TODO add notification decorator
class EventService {
    constructor() {
        this.notifications = [];
    }

    register(callback) {
        this.callbackFunction = callback;
    }

    getNotifications() {
        return this.notifications;
    }

    removeTop() {
        this._update(() => {
            this.notifications.shift();
        });
    }

    remove(id) {
        this._update(() => {
            this.notifications[this.notifications.findIndex(el => el.id === id)].out = true;
            setTimeout(() => {
                this.notifications = this.notifications.filter(el => el.id !== id);
            }, 500);

        });
    }

    addWarning(text) {
        this._update(() => {
            this.notifications.push(EventService._generateNotification(NOTIFICATION_TYPES.WARNING, text));
        });
    }

    addOk(text) {
        this._update(() => {
            this.notifications.push(EventService._generateNotification(NOTIFICATION_TYPES.OK, text));
        });
    }

    addError(text) {
        this._update(() => {
            this.notifications.push(EventService._generateNotification(NOTIFICATION_TYPES.ERROR, text));
        });
    }

    addInfo(text) {
        this._update(() => {
            this.notifications.push(EventService._generateNotification(NOTIFICATION_TYPES.INFO, text));
        });
    }


    _update(func) {
        func();
        if (!!this.callbackFunction) {
            setTimeout(this.callbackFunction(), 0);
        }
    }

    static _generateNotification(type, text) {
        return {id: _generateId(), type: type, text: text, out: false}
    }
}

export let eventService = new EventService();

function _generateId() {
    let size = 10000000;
    return Math.floor((Math.random() * size));
}