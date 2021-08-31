import { createAction, createReducer } from 'redux-act'
export const setScore = createAction('SET_SCORE')

const handlers = {
    [setScore](ui, payload) {
        return payload
    }
}

export default createReducer(handlers, {})