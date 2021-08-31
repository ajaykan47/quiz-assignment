import React, { useState, useEffect } from "react";
import {
    CircularProgress,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button
} from '@material-ui/core';

function Questions({
    isFetching,
    data,
    setQuestionNumber,
    question,
    setScore,
    score,
    setDifficultyLevel,
    clearData
}) {
    const [value, setValue] = useState(null)
    const [feedbackBox, setFeedbackBox] = useState(false)
    const [scoreBox, openScoreBox] = useState(false)

    useEffect(() => {
        if(question < 10) {
            setTimeout(() => {
             handleNext()
            }, 10000);
        }

        else {
            openScoreBox(true)
        }
      
    }, [question]);

    const handleChange = event => {
        setFeedbackBox(false)
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        if(data.correct === value) {
            const newScore = score + 1
            setScore(newScore)
        }
        
        setFeedbackBox(true)
    }

    const initializeValue = () => {
        setValue(null)
        setFeedbackBox(false)
    }

    const renderHTML = (escapedHTML) => 
        React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });

    const handleNext = () => {
        setQuestionNumber(question + 1)
        initializeValue()
    }

    const handleReset = () => {
        setDifficultyLevel('')
        clearData()
    }
    
    if(scoreBox) {
        return (
            <div>
                <span>Your Total Score is {score}.</span>
                <div>
                    Do you want to play again?
                    <Button onClick={handleReset}>
                        Yes
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="questions">
            {(isFetching && !data) ? (
                <CircularProgress />
            ) : (
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <span>Question {question}</span>
                            {renderHTML(data.question)}
                        </FormLabel>
                        <RadioGroup value={value} onChange={handleChange}>
                            {data.options.map((option, index) => (
                                <FormControlLabel
                                    value={option}
                                    control={<Radio />}
                                    label={renderHTML(option)}
                                    key={index}
                                    disabled={feedbackBox}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                   
                </div>
            )}
            <div style={{display: 'flex'}}>
                <Button onClick={handleSubmit} disabled={!value || feedbackBox}>
                    Submit
                </Button>
            </div>   
            {feedbackBox && (
                <div className="feedback">
                    {data.correct === value
                        ? (
                            <span>Your answer is correct</span>
                        )
                       : (
                            <span>Your answer is wrong! The correct answer is {renderHTML(data.correct)}</span>
                       )
                    }
                </div>
            )}
        </div>
    );
}

export default Questions

