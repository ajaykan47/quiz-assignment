import { createAction, createReducer } from 'redux-act'
export const setData = createAction('SET_DATA')
export const clearData = createAction('CLEAR_DATA')

const handlers = {
    [setData](state, { results }) {
        return {
            ...state,
            ...results
        }
    },

    [clearData](ui, payload) {
        return {
            ...ui,
            user: {}
        }
    }
}

export default createReducer(handlers, {})