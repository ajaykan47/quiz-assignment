import React, { useState } from "react";
import DifficultLevel from "./DifficultLevel";
import Questions from "./Questions";
import * as difficultyLevelActions from '../redux/reducer/ui/difficultyLevelUiDux'
import * as quizThunk from '../redux/thunks/quizThunk'
import * as quizSelector from '../redux/selectors/quizSelector'
import * as questionUiActions from '../redux/reducer/ui/questionUiDux'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    level: state.ui.difficultyLevel,
    data: quizSelector.quizRowSelector(state),
    isFetching: state.ui.fetching,
    question: state.ui.question
})

const mapDispatchToProps = {
    ...difficultyLevelActions,
    ...questionUiActions,
    ...quizThunk
}

function Quiz(props) {
    const { level } = props
    return (
        <div className="quiz">
            {level === '' ? (
                <DifficultLevel {...props} />
            ) : (
                <Questions {...props}/>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

