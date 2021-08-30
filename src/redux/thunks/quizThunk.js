import axios from 'axios'
import { constants } from '../../constants'
import * as fetchingActions from '../reducer/ui/fetchingUiDux'
import * as difficultyLevelUiActions from '../reducer/ui/difficultyLevelUiDux'
import * as quizActions from '../reducer/quizDux'

export const getQuizDetails = (params = {}) => (dispatch, getState) => {
    dispatch(fetchingActions.startFetching())
    dispatch(difficultyLevelUiActions.setDifficultyLevel(params.difficulty))
    
    return axios({
        method: 'get',
        url: `${constants.api}/api.php`,
        params: {
            amount: 10,
            category: 18,
            type: 'multiple',
            ...params
        }
    })
        .then((response = {}) => {
            if(response.data) {
                dispatch(quizActions.setData(response.data))
            }
            dispatch(fetchingActions.stopFetching())
        })
        .catch(() => {
            dispatch(fetchingActions.stopFetching())
        })
}