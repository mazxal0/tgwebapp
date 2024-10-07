import ItemForSurvey from "../ItemsForSurvey/ItemForSurvey";
import {surveyItems} from '../ItemsForSurvey/informations'
import classes from './PageSurvey1.module.css'

import React from "react";
import {useState} from 'react'



export default function PageSurvey1({onChangeSurvey}){

    const allValues = [];

    const [values, setValues] = useState([]);
    const [onViewButton, setOnViewButton] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

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

    const onChangePage = () => {
        if(currentPage < surveyItems.length - 1) {
            setCurrentPage(currentPage + 1);
            allValues.push(values);
            setOnViewButton(false);
            setValues([]);
        }
        else{
            onChangeSurvey();
        }
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.styleTitle}>{surveyItems[currentPage].title}</h2>
            {surveyItems[currentPage].text.map((text) => (
                <ItemForSurvey key={text} text={text} onChangeValues={onChangeValues} />
            ))}
            {onViewButton && <button
                className={classes.styleButton}
                onClick={onChangePage}
            >Далее</button>}
        </div>
    )
}
