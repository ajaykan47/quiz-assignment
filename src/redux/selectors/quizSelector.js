import { createSelector } from 'reselect'

const getQuizes = state => state.data.quizes

const getQuestionNumber = state => state.ui.question

export const quizRowSelector = createSelector(
    getQuizes,
    getQuestionNumber,
    (quizes, questionNumber) => {
        const quizeData = Object.values(quizes)
        
        const rows = quizeData.map((quiz, index) => {
            const options = quiz.incorrect_answers.concat(quiz.correct_answer)
            return ({
                index: index + 1,
                question: quiz.question,
                options: suffleData(options),
                correct: quiz.correct_answer,
                disableNext: quizeData.length < questionNumber + 1
            })
        })

        return rows.find(row => row.index === questionNumber)
    }
)

const suffleData = options => 
    options.sort(() => 0.5 - Math.random())
