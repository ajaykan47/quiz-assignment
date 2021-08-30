import { createAction, createReducer } from 'redux-act'
export const startFetching = createAction('START_FETCHING')
export const stopFetching = createAction('STOP_FETCHING')

const handlers = {
    [startFetching]() {
        return true
    },

    [stopFetching]() {
        return false
    },
}

export default createReducer(handlers, {})