import classes from "./Authorization.module.css"

export default function Authorization() {

    return (
        <div className={classes.main_part_of_authorization}>
            <p className={classes.p}>
                <span className={classes.RU}>RU</span>
                <span className={classes.seen}>seen</span>
            </p>
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
        </div>
    )

}