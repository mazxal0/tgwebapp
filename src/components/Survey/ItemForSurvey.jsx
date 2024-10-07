import {useState} from 'react'
import './customCheckBox.css'

const styleCheckButton = {
    gridArea: 'checkBoxButton',
    width: '1em',
    height: '1em',
    marginTop: '0.3em',
    borderRadius: '0',
    backgroundColor: '#1F1F1F',
    display: 'none',
};

const style_h3 = {
    color: '#C9C9C9',
    fontSize: '1em',
    fontFamily: 'Montserrat sans-serif',
    gridArea: 'text',
    marginTop: '0.225em',
};

const style_div = {
    display: 'grid',
    gridTemplateAreas: `
        "checkBoxButton text"
    `,
    gridTemplateColumns: `2.5em 15em`,
    justifyContent: 'center',
    padding: '0.3em',
};


export default function ItemForSurvey({text, onChangeValues}) {

    const [isChecked, setChecked] = useState(false);

    const setCheck = () => {
        setChecked(!isChecked);
    }

    const onChangeAll = () => {
        onChangeValues(text);
        setCheck();
    }

    return (
        <div style={style_div}>
            <label>
                <input
                    style={styleCheckButton}
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChangeAll}
                />
                <span className={'customCheckBox' + (isChecked ? ' checked' : '')}></span>
            </label>
                <h3 style={style_h3}>{text}</h3>

        </div>
    )
}