import { createAction, createReducer } from 'redux-act'
export const setDifficultyLevel = createAction('SET_DIFFICULTY_LEVEL')

const handlers = {
    [setDifficultyLevel](ui, payload) {
        return payload
    }
}

export default createReducer(handlers, {})