import React from 'react'

import './Login.css'

function Login() {
    return (
        <div className= "log__main">
                <div className= "log__header">
                    <h2> Welcome to pixar</h2>
                    <p> Log into your account</p>
                </div>
            <div className= "log__body">
                
                <div className= "log__input">
                   <div className= "log__input__type">
                        <input type= "email" placeholder= "Type your email here" required />
                    </div> 
                    <div className= "log__input__type">
                        <input type= "password" placeholder= "Type password here" required />
                    </div> 
                    <div className= "log__in__button">
                        <button>
                            Log in
                        </button>
                    </div>
                </div>

                <div className= "log__short">
                    <div className= "log__gmail">
                        <button>
                            Log with google
                        </button>
                    </div>
                    <div className= "log__gmail">
                        <button>
                         Log with Facebook
                        </button>
                    </div>
                    <div className= "log__gmail">
                        <button>
                            Log with Instragram
                        </button>
                    </div>
                    <div className= "log__gmail">
                        <button>
                            Log with LinkedIn
                        </button>
                    </div>
                </div>
            </div>

            <div className= "log__footer">
                <div className= "log__prblm">
                    <p> Forget Password?</p>
                    <p> Facing problem?</p>
                </div>
            </div>
        </div>
    )
}

export default Login
