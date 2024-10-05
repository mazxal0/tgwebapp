import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Authorization from "./components/authorization/authorization";
import Registration from "./components/registration/Registration";

import {useEffect, useState} from 'react';



export default function App() {
    const [currentWeb, setCurrentWeb] = useState('authorization');

    const setWeb = (newWeb) => {
        setCurrentWeb(newWeb);
    }

    useEffect(() => {
        setCurrentWeb('registration');
    }, []);

    const render = () => {
        switch (currentWeb) {
            case 'authorization':
                return <Authorization setWeb={setWeb}/>;
            case 'registration':
                return <Registration/>;
            default:
                return null
        }
    }


    return (
    <div>
        <Header />
        {/*{currentWeb !== 'authorization' && currentWeb !== 'registation' ? <Footer /> : null}*/}
        {render()}
        {currentWeb !== 'authorization' && currentWeb !== 'registation' ? <Footer /> : null}
    </div>
  );
}
