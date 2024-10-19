import classes from './FirstForm.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export default function FirstForm({ Inputs, Buttons }){

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        text: '',
        password: ''
    });
    const [isSuccess, setIsSuccess] = useState(undefined);

    const onChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });
    }


    const submitButton = () => {
        console.log(userData);
        if (userData.name === '89106914571' && userData.password === 'pass') {
            setIsSuccess(true);
            setTimeout(()=>{
                navigate('/survey');
            }, 1000);
        }
        else {
            setIsSuccess(false);
            setTimeout(() => {
                setIsSuccess(undefined);
            }, 3000);
        }
    }

    const navToReg = () => {
        navigate("/reg");
    }

    return (
    <>
        {isSuccess && <p className={classes.letter + (isSuccess ? (' ' + classes.grinText) : '')}>Успешно!</p>}
        {isSuccess === false && <p className={classes.letter + (isSuccess === false ? (' ' + classes.redText) : '')}>*Неправильный номер телефона или пароль</p>}


        <form className={classes.form}>
            <Input
                name={"name"}
                type={"text"}
                text={'+7 (962) 999-99-99'}
                onChange={onChange}
                value={userData.name}
                success={isSuccess}
            />
            <Input
                name={'password'}
                type={'password'}
                text={'qwerty-123456'}
                onChange={onChange}
                value={userData.password}
                success={isSuccess}
            />

            <label className={classes.label}><p className={classes.p}>Восстановить пароль</p></label>

            <Button
                text={"Вход"}
                styleB={'stand'}
                onClick={submitButton}/>
            <Button text={"Регистрация"} styleB={'transparent'} onClick={navToReg}/>
        </form>
    </>)
}