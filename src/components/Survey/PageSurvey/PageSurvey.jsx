import ItemForSurvey from "../ItemsForSurvey/ItemForSurvey";
import {surveyItems} from '../ItemsForSurvey/informations'
import classes from './PageSurvey.module.css'

import React from "react";
import {useState} from 'react'



export default function PageSurvey(){

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
            setValues([]);
        }
        else{
            console.log("THE END");
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
