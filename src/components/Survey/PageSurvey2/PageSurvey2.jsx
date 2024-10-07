import './PageSurvey2.module.css'
import SurveyForms from "../ItemsForSurvey/SurveyForms";
import {surveyForms} from "../ItemsForSurvey/informations";
import {useState} from "react";


const style = {
    div: {
        margin: '5em 0 0 0',
    },
    button: {
        color: '#fff',
        backgroundColor: '#6EADFF',
        border: 'none',
        borderRadius: '0.5em',
        fontSize: '1.1em',
        padding: '1em 5em 1em 5em',
        marginTop: '2em',
    },
    divOfButton: {
        display: 'flex',
        justifyContent: 'center',
    }
};

export default function PageSurvey2() {

    const [valuesOfArea, setValuesOfArea] = useState([] );

    const onChangeValuesOfArea = (index, event) => {
        const newValues = valuesOfArea;
        newValues[index] = event.target.value;
        setValuesOfArea(newValues);
    }

    const onEndOfSurvey = () => {
        console.log(valuesOfArea);
    }

    return (
        <>
            <div style={style.div}>
                {surveyForms.map((element, index) => <SurveyForms
                    key={element.title}
                    title={element.title}
                    exampleText={element.exampleText}
                    onChangeValuesOfArea={(event) => onChangeValuesOfArea(index, event)}
                />)}


            </div>
            <div style={style.divOfButton}>
                <button
                    style={style.button}
                    onClick={onEndOfSurvey}>
                    Click me
                </button>
            </div>
        </>
    )
}