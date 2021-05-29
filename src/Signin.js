import React, { Component } from 'react'
import './signin.css'

export default class Signin extends Component {
    render() {
        return (
            <div className="top">
                <div className="Myclass">
                <h1>Welcome</h1>
                <p>Login back into your Accaunt</p>
                <div className="blue">
                    <h1>Sign in</h1>
                    <input placeholder="Full name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="password"></input>
                    
                    <button>Sign up</button>
                    <div className="img">
                        
                    </div>
                </div>
                <div className="footer">
                    <h6>Already an have accaunt</h6>
                    <p onClick={props.onClick}>Login in</p>
                </div>
            </div>
            </div>
        )
    }
}
