import classes from './Button.module.css'


export default function Button({text, onClick, success, styleB='stand'}) {

    let styleButton = '';

    if(styleB === 'stand') {
        styleButton = classes.button + ' ' + classes.First;
    }
    else if(styleB === 'transparent') {
        styleButton = classes.button + ' ' + classes.Second;
    }



    return (<button type={'button'} className={styleButton} onClick={onClick}>{text}</button> )

}