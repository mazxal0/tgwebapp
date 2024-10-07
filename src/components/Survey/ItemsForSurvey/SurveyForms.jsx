import classes from './SurveyForms.module.css'

const styleFormOfSurvey = {
    div: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateAreas: `
            "title"
            "textArea"
        `,
        gridTemplateColumns: '90%',

        marginTop: '0',
        marginBottom: '0',
    },
    h3: {
        color: 'white',
        fontSize: '1.2em',
        textAlign: 'center',
        overFlow: 'break-word',
        gridArea: 'title',
        justifyItems: 'center',
        marginTop: '2em',
        marginBottom: '0',

    },



    form: {
        justifySelf: 'center',
    }
}


export default function SurveyForms({title, exampleText, onChangeValuesOfArea}) {
    return (
        <div style={styleFormOfSurvey.div}>
            <h3 style={styleFormOfSurvey.h3}>
                {title}
            </h3>
            <form style={styleFormOfSurvey.form}>

                    <textarea
                        className={classes.textarea}
                        placeholder={exampleText}
                        onChange={onChangeValuesOfArea}
                    />
            </form>

        </div>
    )
}