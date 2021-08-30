import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import fetchingUi from './ui/fetchingUiDux'
import questionUi from './ui/questionUiDux'
import difficultyLevelUi from './ui/difficultyLevelUiDux'
import quizes from './quizDux'
import { history } from '../../history'

export default combineReducers({
    ui: combineReducers({
        question: questionUi,
        difficultyLevel: difficultyLevelUi,
        fetching: fetchingUi
    }),
    data: combineReducers({
        quizes
    }),
    router: connectRouter(history)
})