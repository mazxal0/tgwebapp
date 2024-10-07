import './App.css';
import Authorization from "./components/authorization/authorization";
import Registration from "./components/registration/Registration";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from "./components/Survey/Survey";


export default function App() {



    return (

        <Router>
            <Routes>
                <Route path="/" element={<Authorization />}></Route>
                <Route path={"/registration"} element={<Registration />}></Route>
                <Route path={'/startSurvey'} element={
                    <Survey />
                }></Route>
            </Routes>
        </Router>


  );
}
