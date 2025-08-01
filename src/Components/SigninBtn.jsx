import React from 'react';
import "../CSSFiles/SigninBtn.css";
import { useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import Dashboard from './Dashboard';


function SigninBtn({ statefn }) {
    const { isSignedIn, isLoaded } = useUser();

    React.useEffect(() => {
        if (isLoaded && isSignedIn) {
            statefn();
        }
    }, [isSignedIn, statefn]);

    if(!isLoaded) {return (<div className="loader"></div>)};

    return (
        
        (!isSignedIn) ? <SignInButton className="login-btn" mode="redirect" /> : <Dashboard/>
        
    );
}

export default SigninBtn;