import {createStore} from 'redux';

export default function setStore(reducer) {
    if (reducer) {
        //redux debug tools engagement
        return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
        return null;
    }
}



