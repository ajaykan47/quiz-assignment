import React, { useState } from "react";
import { Select, FormControl, FormHelperText, MenuItem, Button } from '@material-ui/core';
import { dropDownOptions } from '../constants' 

function DifficultLevel({setDifficultyLevel, getQuizDetails}) {
    const [value, setValue] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        getQuizDetails({
            difficulty: value
        })
    }

    return (
        <div className="drop-down">
            <FormControl>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                >
                    {dropDownOptions.map((option, index) => (
                        <MenuItem value={option.value} key={index}>{option.label}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>Difficulty Level</FormHelperText>
            </FormControl>
                <Button className="next-button" onClick={handleSubmit} disabled={value===''}>
                    Next
                </Button>
        </div>
    );
}

export default DifficultLevel