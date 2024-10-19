import classes from './Input.module.css'

export default function Input({ text, success, ...props }) {

    let styleInput = classes.input;

    if(success === true){
        styleInput += ' ' + classes.greenOutline;
    }
    else if(success === false){
        styleInput += ' ' + classes.redOutline;
    }
    return (<input
        className={styleInput}
        placeholder={text}
        {...props}
    />)
}