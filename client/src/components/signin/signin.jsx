import React, { useContext, useState } from "react";
import { UserContext } from "../../context/provider-user";

const SignIn = () => {
    let [email, setEmail] = useState('')
    let { user, setUser } = useContext(UserContext)

    const login = (e) => {
        e.preventDefault()
        if (email === "Master")
            setUser("Master")
        else
            setUser("Guest")
    }
    
    return (
        <div className="signin">
            <form onSubmit={login}>
                <h2>התחברות</h2>
                <p>אימייל</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {user}
                <p><button>התחברות</button></p>
            </form>
        </div>
    )
}

export default SignIn;