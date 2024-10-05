import React from 'react';
import styles from './Registration.module.css';
import gmailLogo from '../../images/icons8-gmail-48.png';
import vkLogo from '../../images/icons8-vk-48.png';

const Registration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <img src="/logo.png" alt="RUseen" className={styles.logo} />
                <h2 className={styles.title}>Регистрация</h2>

                <form>
                    <input
                        type="text"
                        placeholder="Фамилия Имя"
                        className={styles.inputField}
                    />
                    <input type="email" placeholder="Почта" className={styles.inputField} />
                    <input type="password" placeholder="Пароль" className={styles.inputField} />
                    <input
                        type="password"
                        placeholder="Подтверждение пароля"
                        className={styles.inputField}
                    />

                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" />
                        Запомнить меня?
                    </label>

                    <button className={styles.submitButton}>Зарегистрироваться</button>
                </form>

                <p className={styles.agreementText}>
                    Продолжая пользоваться аккаунтом, вы принимаете Условия использования и подтверждаете, что ознакомились с документом <span>Политика конфиденциальности</span>.
                </p>

                <div className={styles.socialLogin}>
                    <p className={styles.socialLoginText}>Зарегистрироваться через</p>
                    <div className={styles.socialIcons}>
                        <img src={gmailLogo} alt="Gmail" className={styles.icon} />
                        <img src={vkLogo} alt="VK" className={styles.icon} />
                    </div>
                </div>

                <p className={styles.loginLink}>
                    Уже есть аккаунт? <a href="/login">Войти</a>
                </p>
            </div>
        </div>
    );
};

export default Registration;
