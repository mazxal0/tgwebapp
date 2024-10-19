import classes from './Reg.module.css'

import SecondForm from "../../components/Forms/SecondForm";

export default function Auth() {

    return (
        <div className={classes.container}>
            <h5 className={classes.h5}><span className={classes.RU}>RU</span>seen</h5>
            <h2 className={classes.reg}>Регистрация</h2>

            <SecondForm />



            <a className={classes.link} href={'/'}>Я ознакомлен и согласен с условиями пользовательского соглашения</a>
        </div>
    )

}