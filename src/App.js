import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

//components
import AuthBase from "./pages/auth/AuthBase";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

//hooks
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";

//actions
import {setAuthLoading, setAuthMessage} from "./redux/authForm";
import { setCurrentUser, setAuthToken } from "./redux/userAuth";

//helpers
import { login } from "./helpers/authHelper";
import { setAxiosAuthToken } from "./helpers/fetchHelper";
import { isEmpty } from "./helpers/utils";


function App() {

    //to allow hook call not directly in function component
    const dispatch = useDispatch();

    useEffect(()=>{
        // check localStorage
        if (!isEmpty(localStorage.getItem("token"))) {
            dispatch(setAuthToken(localStorage.getItem("token")));
        }

        if (!isEmpty(localStorage.getItem("user"))) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch(setCurrentUser(user));
        }
    },[]);
    
    const auth = useSelector(state => state.auth);

    async function handleLogin(values) {
        
        dispatch(setAuthLoading(true));

        const {data} = await login (values);

        if (data.error) {
            dispatch(setAuthMessage(data.error));
        }
        else {
            dispatch(setAuthToken(data.auth.token));
            dispatch(setCurrentUser(data.auth.user));
            dispatch(setAuthMessage(""));
        }

        dispatch(setAuthLoading(false));
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
                            auth.user ?
                            <Home /> :
                            <Navigate to="/login" />
                        }
                />
                    
                <Route path="/login" 
                    element=
                        {
                            <AuthBase>
                                {
                                    auth.user ?
                                    <Navigate to="/" />:
                                    <LoginForm onSubmit={handleLogin}/>
                                }
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
                            auth.user ?
                            <Profile /> :
                            <Navigate to="/login" />
                        } 
                />

                <Route path="/messages"
                    element = 
                        {
                            auth.user ?
                            <Messages /> :
                            <Navigate to="/login" />
                        } 
                />
            </Routes>
        </div>
    );
}

export default App;
