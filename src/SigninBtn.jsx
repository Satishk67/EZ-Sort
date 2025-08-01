import React from 'react';
import { useUser } from "@clerk/clerk-react";
import "./SigninBtn.css";
import { SignInButton } from "@clerk/clerk-react";


function SigninBtn({ statefn }) {
    const { isSignedIn } = useUser();

    React.useEffect(() => {
        if (isSignedIn) {
            statefn();
        }
    }, [isSignedIn, statefn]);

    return (
        <SignInButton className="login-btn" mode="redirect" />
    );
}

export default SigninBtn;