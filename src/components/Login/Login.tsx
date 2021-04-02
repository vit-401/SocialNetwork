import React from 'react'

export const Login = () => {
    return (
        <>
            <div>LoginPage</div>
            <h1>Login</h1>
            <form >
                <div>
                    <input type="text" placeholder={'Login'}/>
                </div>
                <div>
                    <input type="password" placeholder={'password'}/>
                </div>
                <div>
                    <input type="checkbox" /> Remamber me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}