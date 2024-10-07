const styleFormOfSurvey = {
    div: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateAreas: `
            "title"
            "textArea"
        `,
        gridTemplateColumns: 'minmax()',
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
    textarea: {
        gridArea: 'textarea',
        marginTop: '2em',
        border: 'none',
        backgroundColor: '#1F1F1F',
        padding: '0.5em 0 0 0.5em',
        //marginLeft: '5.5em',
        justifyItems: 'center',
        resize: 'none',
        width: '26em',
        height: '10em',
        borderRadius: '1em',
    },
    form: {
        justifySelf: 'center',
    }
}


export default function SurveyForms({title, exampleText}) {
    return (
        <div style={styleFormOfSurvey.div}>
            <h3 style={styleFormOfSurvey.h3}>
                {title}
            </h3>
            <form style={styleFormOfSurvey.form}>

                    <textarea
                        style={styleFormOfSurvey.textarea}
                        placeholder={exampleText}
                    />
            </form>

        </div>
    )
}