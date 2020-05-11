import React, { useRef, useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useHistory, Link } from 'react-router-dom'

function Login() {

    const [isVisible, setIsVisible] = useState(false)

    const storedUser = localStorage.getItem('new user')
    const storedUserParsed = storedUser && JSON.parse(storedUser)

    const { user, setUser } = useContext(AppContext)

    const history = useHistory()

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [valid, setValid] = useState({ emailErr: '', passwordErr: '' })

    const handleValidation = () => {
        let passwordMsg = ''
        let emailMsg = ''

        if (emailRef.current?.value !== storedUserParsed.email)
            emailMsg = "Invalid email"
        if (passwordRef.current?.value !== storedUserParsed.password)
            passwordMsg = "Invalid password"

        setValid({
            emailErr: emailMsg,
            passwordErr: passwordMsg
        })
        return (passwordMsg === '' && emailMsg === '')
    }

    const handleLogin = () => {
        if (handleValidation() && emailRef.current?.value && passwordRef.current?.value) {
            setUser(
                {
                    password: passwordRef.current.value,
                    email: emailRef.current.value,
                    isLogin: true
                })
        }
    }

    useEffect(() => {
        user && localStorage.setItem('isLogged', JSON.stringify(user.isLogin))
        user.isLogin && history.push('/cart')
    }, [user, history])

    return (
        <div className="login-outter page">
            <div className="login-inner">
                <p className="login-title">Log in</p>
                <input type="text" placeholder="Email" ref={emailRef} className="about-input" />
                <p className="valid">
                    {valid.emailErr}
                </p>
                <div>
                    <input
                        type={isVisible ? "text" : "password"}
                        placeholder="Password"
                        ref={passwordRef}
                        className="about-input password"
                    />
                    <button onClick={() => setIsVisible(!isVisible)} className="eye-btn btn">
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
                <p className="valid">
                    {valid.passwordErr}
                </p>
                <button className="login-btn" onClick={handleLogin}>Log in</button>
                <p className="link-acc">Don't have an account?
                    <Link to="/signup" style={{ color: "darkblue" }}> Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login