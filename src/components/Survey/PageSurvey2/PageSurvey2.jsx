import './PageSurvey2.module.css'
import SurveyForms from "../ItemsForSurvey/SurveyForms";
import {surveyForms} from "../ItemsForSurvey/informations";


const style = {
    div: {
        margin: '5em 0 0 0',
    },
};

export default function PageSurvey2() {
    return (

        <div style={style.div}>
            {surveyForms.map(element => <SurveyForms key={element.title} title={element.title} exampleText={element.exampleText} />)}
        </div>
    )
}