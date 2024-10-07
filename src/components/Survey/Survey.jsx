import PageSurvey1 from "./PageSurvey1/PageSurvey1";
import {useState} from "react";
import PageSurvey2 from "./PageSurvey2/PageSurvey2";
import Header from "../header/header";

export default function Survey(){

    const [isChangeSurvey, setIsChangeSurvey] = useState(false);

    const onChangeSurvey = () => {
        setIsChangeSurvey(true);
    }

    return (
        <>
            <Header />
            {!isChangeSurvey ? <PageSurvey1 onChangeSurvey={onChangeSurvey}/> : <PageSurvey2 />}
        </>
    )
}