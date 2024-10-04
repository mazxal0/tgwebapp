import classes from "./Authorization.module.css"
import Gmail_logo from '../../images/gmail_logo.png'
import Mail_ya_logo from '../../images/vk_logo.png'
import VK_logo from '../../images/mail-ya_logo.png'

export default function Authorization() {
    return (
        <div className={classes.main_part_of_authorization}>

            <h1 className={classes.h1}>
                Вход
            </h1>
            <div className={classes.form_of_user}>
                <input className={classes.name} placeholder="Имя пользователя"/>
                <input type="password" className={classes.pass} placeholder="Пароль"/>
                <a className={classes.forgot_pass} href="https://ya.ru">Забыли пароль?</a>
                <button className={classes.button}>Войти</button>
            </div>
            <h6 className={classes.text_user}>Продолжая пользоваться, Вы
                принимаете <strong><a href="https://ya.ru" className={classes.a}>Условия пользования</a></strong> и подтверждаете,
                что ознакомились с документом "<a href="https://ya.ru" className={classes.a}>Политика
                    конфидиальности</a>".
            </h6>

            <h3 className={classes.entrance}>Войти через</h3>

            <div className={classes.logos}>
                <a className={classes.a} href="https://ya.ru">
                    <img className={classes.img} src={Gmail_logo} alt={'252352'}/>
                </a>
                <a className={classes.a} href="https://ya.ru">
                    <img className={classes.img} src={VK_logo} alt={'2222222'}/>
                </a>
                <a className={classes.a} href="https://ya.ru">
                    <img className={classes.img} src={Mail_ya_logo} alt={'111111'}/>
                </a>
            </div>

            <div className={classes.foot}></div>
        </div>
    )

}