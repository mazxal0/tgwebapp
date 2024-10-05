import classes from './Registration.module.css'
import Gmail_logo from '../../images/icons8-gmail-48.png'
import VK_logo from '../../images/icons8-vk-48.png'

import {Link} from 'react-router-dom'

export default function Registration() {
    return (
        <div className={classes.container}>
            <h6 className={classes.name_of_company}>
                <div className={classes.RU}>RU</div>
                seen
            </h6>
            <h2 className={classes.registration}>Регистрация</h2>

            <div className={classes.form_of_registration}>
                <input placeholder={'Имя Фамилия'} className={classes.input}/>
                <input type="email" placeholder={'Почта'} className={classes.input}/>
                <input type="password" placeholder={'Пароль'} className={classes.input}/>
                <input type="password" placeholder={'Подтверждение пароля'} className={classes.input}/>
            </div>

            <div className={classes.remember}>
                <input type={'checkbox'} className={classes.remember_checkbox}/>
                <h5 className={classes.remember_text}> Запомнить меня?</h5>
            </div>

            <button className={classes.btn}>
                Зарегистрироваться
            </button>

            <h6 className={classes.text_user}>Продолжая пользоваться, Вы
                принимаете <strong><a href="https://ya.ru" className={classes.a}>Условия пользования</a></strong> и
                подтверждаете,
                что ознакомились с документом "<a href="https://ya.ru" className={classes.a}>Политика
                    конфидиальности</a>".
            </h6>

            <div>
                <h3 className={classes.fast_reg}>Зарегистрироваться через</h3>
                <div className={classes.logos}>
                    <a className={classes.a} href="https://ya.ru">
                        <img className={classes.img} src={Gmail_logo} alt={'252352'}/>
                    </a>
                    <a className={classes.a} href="https://ya.ru">
                        <img className={classes.img + ' ' + classes.vk} src={VK_logo} alt={'2222222'}/>
                    </a>
                </div>
            </div>

            <span className={classes.foot}>
                <h4 className={classes.h4}>Уже есть аккаунт?</h4>
                <Link to={'/'} className={classes.link}>Войти</Link>
            </span>

        </div>
    )
}