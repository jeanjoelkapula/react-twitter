import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

//components
import AuthBase from "./pages/auth/AuthBase";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import { ToastContainer } from "react-toastify";
import ErrorList from "./components/ErrorList";
import PostForm from "./components/PostForm";
import PostModal from "./components/PostModal";

//hooks
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

//actions
import {setAuthLoading} from "./redux/authForm";
import { setCurrentUser, setAuthToken } from "./redux/userAuth";

//helpers
import { login, register } from "./helpers/authHelper";
import { setAxiosAuthToken } from "./helpers/fetchHelper";
import { isEmpty } from "./helpers/utils";
import Post from "./components/Post";


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

        if (data.errors) {
            toast.error(<ErrorList errors={data.errors} />);
        }
        else {
            dispatch(setAuthToken(data.auth.token));
            dispatch(setCurrentUser(data.auth.user));
        }

        dispatch(setAuthLoading(false));
    }

    async function handleRegister(values) {
        dispatch(setAuthLoading(true));

        const {data} = await register (values);

        if (data.errors) {
            toast.error(<ErrorList errors={data.errors} />);
        }
        else {
            dispatch(setAuthToken(data.auth.token));
            dispatch(setCurrentUser(data.auth.user));
        }

        dispatch(setAuthLoading(false));
    }

    return (
        <div className="App">
            <ToastContainer hideProgressBar={true} newestOnTop={true} />
            <PostModal />
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
                                {
                                    auth.user ?
                                    <Navigate to="/" /> :
                                    <RegisterForm onSubmit={handleRegister}/>
                                }
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
