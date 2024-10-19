import classes from './SecondForm.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export default function SecondForm({ Inputs, Buttons }){

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        tel: '',
        password: '',
        secondPassword: '',
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

        if (userData.name === "user" &&  userData.tel === '111' &&  userData.password === 'pass' && userData.secondPassword === 'pass') {
            setIsSuccess(true);
            setTimeout(()=>{
                navigate('/survey');
            }, 1500);
        }
        else {
            setIsSuccess(false);
            setTimeout(() => {
                setIsSuccess(undefined);
            }, 3000);
        }
    }

    const navToReg = () => {
        navigate("/");
    }

    return (
        <>
            {isSuccess && <p className={classes.letter + (isSuccess ? (' ' + classes.grinText) : '')}>Успешно!</p>}
            {isSuccess === false && <p className={classes.letter + (isSuccess === false ? (' ' + classes.redText) : '')}>
                *Неправильные данные</p>}


            <form className={classes.form}>
                <Input
                    name={"name"}
                    type={"text"}
                    text={'Имя пользователя'}
                    onChange={onChange}
                    value={userData.name}
                    success={isSuccess}
                />
                <Input
                    name={'tel'}
                    type={'tel'}
                    text={'Номер телефона'}
                    onChange={onChange}
                    value={userData.tel}
                    success={isSuccess}
                />
                <Input
                    name={'password'}
                    type={'password'}
                    text={'Пароль'}
                    onChange={onChange}
                    value={userData.password}
                    success={isSuccess}
                />
                <Input
                    name={'secondPassword'}
                    type={'password'}
                    text={'Подтвердите пароль'}
                    onChange={onChange}
                    value={userData.secondPassword}
                    success={isSuccess}
                />
                <div className={classes.space}></div>
                <Button text={"Регистрация"} styleB={'stand'} onClick={submitButton}/>
                <Button
                    text={"Вход"}
                    styleB={'transparent'}
                    onClick={navToReg}/>

            </form>
        </>)
}