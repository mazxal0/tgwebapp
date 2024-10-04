import classes from './header.module.css'

export default function Header(){
    return (
        <div className={classes.head}>
            <p className={classes.p}>
                <span className={classes.RU}>RU</span>
                <span className={classes.seen}>seen Планер</span>
            </p>
        </div>
    )
}