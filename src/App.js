import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Authorization from "./components/authorization/authorization";
import Registration from "./components/registration/Registration";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {



    return (

        <Router>
            <Routes>
                <Route path="/" element={<Authorization />}></Route>
                <Route path={"/registration"} element={<Registration />}></Route>
            </Routes>
        </Router>


  );
}
