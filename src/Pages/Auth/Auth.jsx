import classes from './Auth.module.css'

import FirstForm from "../../components/Forms/FirstForm";

export default function Auth() {

    return (
        <div className={classes.container}>
            <h5 className={classes.h5}><span className={classes.RU}>RU</span>seen</h5>
            <h2 className={classes.auth}>Авторизация</h2>

            <FirstForm />



            <a className={classes.link} href={'/'}>Я ознакомлен и согласен с условиями пользовательского соглашения</a>
        </div>
    )

}