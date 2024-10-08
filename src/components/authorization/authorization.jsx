import classes from "./Authorization.module.css"
import Gmail_logo from '../../images/icons8-gmail-48.png'
import VK_logo from '../../images/icons8-vk-48.png'
import View from '../../images/view.png'
import NotView from '../../images/notView.png'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Authorization() {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isWrongdata, setIsWrongdata] = useState(false);
    const navigate = useNavigate();

    const [classOfStyleOfTextOfLoginVia, setClassOfStyleOfTextOfLoginVia] = useState(classes.h6);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const onChangeName = (event) => {
        setUserName(event.target.value)
    }

    const onChangePassword = (event) => {
        setUserPassword(event.target.value)
    }

    const onAuthorization = () => {
        const data = ['user', 'pass'];
        if(data[0] !== userName || data[1] !== userPassword){
            setIsWrongdata(true);
            setClassOfStyleOfTextOfLoginVia(classes.h6Other)
        }
        else{
            navigate('/startSurvey');
        }
    }

    return (
        <main className={classes.mainContainer}>
            <div className={classes.container}>
                <p className={classes.p}>
                    RUseen
                </p>
                <h3 className={classes.h3}>Вход</h3>
                <form className={classes.forms}>

                    <input
                        className={classes.input}
                        type={'text'}
                        placeholder={'Имя пользователя'}
                        onChange={onChangeName}
                    />
                    <div>
                    <input
                        className={classes.input}
                        type={isVisiblePassword ? 'text' : 'password'}
                        placeholder={'Пароль'}
                        onChange={onChangePassword}
                    />
                    <button onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                        <img className={classes.eyeImage} src={isVisiblePassword ? View : NotView}/>
                    </button>

                    </div>

                </form>
                <div className={classes.divOfErrorOrForgotPass}>
                    {isWrongdata ? <strong>
                        <h10 className={classes.wrongData}>Неправильные данные</h10>
                    </strong> : null}
                    <h10 className={classes.h10}>Забыли пароль?</h10>

                </div>
                <div className={classes.divOfButton}>
                    <button
                        className={classes.button}
                        onClick={onAuthorization}>
                        Вход
                    </button>
                </div>
                <p className={classes.termsOfUse}>
                    Продолжая пользоваться аккаунтом,
                    вы принимаете Условия использования и подтверждаете,
                    что ознакомились с документом «Политика конфиденциальности».
                </p>

                <h6 className={classOfStyleOfTextOfLoginVia}>Войти через</h6>
                <div className={classes.imageBox}>
                    <img className={classes.imageLink} src={Gmail_logo} alt={'Gmail'} />
                    <img className={classes.imageLink} src={VK_logo} alt={'VK'} />
                </div>

                <h4 className={classes.h4}>Ещё нет аккаунта? <Link className={classes.linkToRegistration} to={'registration'}>Зарегистрироваться</Link></h4>
            </div>
        </main>

    )

}