import ItemForSurvey from "./ItemForSurvey";
import {survey_1} from './informations'
import React from "react";
import {useState} from 'react'

const styleTitle = {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '1em',
    marginTop: '6em',
    marginBottom: '3em'
}

const styleButton = {
    display: 'flex',
    justifySelf: 'center',
}

export default function PageSurvey(){

    const [values, setValues] = useState([]);
    const [onViewButton, setOnViewButton] = useState(false);

    const onChangeValues = (value) => {
        if(values.includes(value)) {
            const newArray = values.filter(item => item !== value);
            setValues(newArray);
            if(newArray.length === 0){
                setOnViewButton(false);
            }
        }
        else{
            const newArray = values;
            newArray.push(value);
            setValues(newArray);
            if(newArray.length > 0){
                setOnViewButton(true);
            }
        }

    }

    return (
        <>
            <h2 style={styleTitle}>Выберите вид путешествия</h2>
            {survey_1.text.map((text) => (
                <ItemForSurvey key={text} text={text} onChangeValues={onChangeValues} />
            ))}
            {onViewButton && <button style={styleButton}>Далее</button>}
        </>
    )
}
