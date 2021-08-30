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

function Questions({isFetching, data, setQuestionNumber, question}) {
    const autoPageTime = 10000

    const [value, setValue] = useState(null)
    const [feedbackBox, setFeedbackBox] = useState(false)

    const bindAutoPage = () => {
        setInterval(() => {
            handleNext()
        }, autoPageTime)
    }

    useEffect(() => {
        bindAutoPage()
    }, []);    

    const handleChange = event => {
        setFeedbackBox(false)
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        setFeedbackBox(true)
    }

    const initializeValue = () => {
        setValue(null)
        setFeedbackBox(false)
    }

    const renderHTML = (escapedHTML) => 
        React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });

    const handlePrevious = () => {
        setQuestionNumber(question - 1)
        initializeValue()
    }

    const handleNext = () => {
        setQuestionNumber(question + 1)
        initializeValue()
    }

    return (
        <div className="questions">
            {isFetching ? (
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
                                <FormControlLabel value={option} control={<Radio />} label={renderHTML(option)} key={index} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                   
                </div>
            )}
            <div style={{display: 'flex'}}>
                <Button onClick={handleSubmit} disabled={!value}>
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
            <div style={{display: 'flex'}}>
                <Button onClick={handlePrevious} disabled={question === 1}>
                    Previous
                </Button>
                <Button onClick={handleNext} disabled={data && data.disableNext}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Questions

