import React, { useEffect } from "react";
import Styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { userSignIn } from "../../state/auth/authSlice";
import { useNavigate } from "react-router-dom";
import MainButton from "../common/button/MainButton";

const SignIn = () => {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
    const isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const errorMessage = useSelector((state: RootState) => state.auth.errorMessage);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate("/home");
        }
    }, [isLogin, navigate]);

    const handleSignIn = () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (username && password) {
            dispatch(userSignIn({ email: username, password }));
        }
    }

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : <div className={Styles.loginContainer}>
                <h1>SignIn</h1>
                <div className={Styles.formContent}>
                    <input autoComplete="off" ref={usernameRef} type="text" placeholder="Username" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <MainButton title="Sign In" onClick={handleSignIn}/>
                    {errorMessage && <p className={Styles.errorMessage}>{errorMessage}</p>}
                </div>
            </div>}
        </>
    )
}

export default SignIn;