import { createAction, createReducer } from 'redux-act'
export const setQuestionNumber = createAction('SET_QUESTION_NUMBER')

const handlers = {
    [setQuestionNumber](ui, payload) {
        return payload
    }
}

export default createReducer(handlers, {})