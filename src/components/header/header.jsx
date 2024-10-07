import classes from './header.module.css'

export default function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.div}>
                <p className={classes.p}>
                    <span className={classes.RU}>RU</span>
                    <span className={classes.seen}>seen Планер</span>
                </p>
            </div>
        </header>
    )
}