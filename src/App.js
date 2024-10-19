import './App.css';

import Auth from "./Pages/Auth/Auth";
import Reg from "./Pages/Reg/Reg";
import Survey from "./Pages/Survey/Survey";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Survey from "./components/Survey/Survey";
// import Tape from './Pages/Tape/Tape'


export default function App() {



    return (

        <Router>
            <Routes>
                <Route path="/" element={<Auth />}></Route>
                <Route path={'/survey'} element={<Survey />}></Route>
                <Route path={"/reg"} element={<Reg />}></Route>
                {/*<Route path={'/startSurvey'} element={<Survey />}></Route>*/}
                {/*<Route path={'/Tape'} element={<Tape />}></Route>*/}
            </Routes>
        </Router>


  );
}
