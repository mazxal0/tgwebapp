




const styleFormOfSurvey = {
    form: {
        display: 'block',
        justifyCenter: 'center',
    },
    h3: {
        color: 'white',
        fontSize: '2em',
    }
}


export default function SurveyForms({title, example}) {
    return (
        <form style={styleFormOfSurvey.form}>
            <h3 style={styleFormOfSurvey.h3}>
                {title}
            </h3>
            <input
                placeholder={example}
            />
        </form>
    )
}