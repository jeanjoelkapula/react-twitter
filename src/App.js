import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

//components
import AuthBase from "./pages/auth/AuthBase";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {
    const user = useSelector(state => state.user)

    function handleLogin(values) {
        // print the form values to the console
        console.log(values)
    }

    function handleRegister(values) {
        // print the form values to the console
        console.log(values)
    }

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" 
                    element=
                        {
                            user.is_authenticated ?
                            <Home /> :
                            <Navigate to="/login" />
                        }
                />
                    
                <Route path="/login" 
                    element=
                        {
                            <AuthBase>
                                <LoginForm onSubmit={handleLogin}/>
                            </AuthBase>
                        }
                />
                    
                <Route path="/register"
                    element=
                        {
                            <AuthBase>
                                <RegisterForm onSubmit={handleRegister}/>
                            </AuthBase>
                        }
                />

                <Route path="/profile"
                    element = 
                        {
                            user.is_authenticated ?
                            <Profile /> :
                            <Navigate to="/login" />
                        } 
                />
            </Routes>
        </div>
    );
}

export default App;
