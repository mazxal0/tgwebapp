import ItemForSurvey from "../ItemsForSurvey/ItemForSurvey";
import {survey_1} from '../ItemsForSurvey/informations'
import classes from './PageSurvey.module.css'

import React from "react";
import {useState} from 'react'



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
        <div className={classes.container}>
            <h2 className={classes.styleTitle}>Выберите вид путешествия</h2>
            {survey_1.text.map((text) => (
                <ItemForSurvey key={text} text={text} onChangeValues={onChangeValues} />
            ))}
            {onViewButton && <button className={classes.styleButton}>Далее</button>}
        </div>
    )
}
