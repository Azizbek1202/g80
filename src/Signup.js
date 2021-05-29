import React, { Component } from 'react'
import './signup.css'
import rasm1 from './rasm1.jpg'

export default class Signup extends Component {
    render() {
        return (
            <div className="top">
                <div className="Myclass">
                <h1>Welcome back</h1>
                <p>Login back into your Accaunt</p>
                <div className="blue">
                    <h1>Login in</h1>
                    <input placeholder="Email"></input>
                    <input placeholder="password"></input>
                    <p className="p">Forgot password</p>
                    <button>Login in</button>
                    <div className="img">
                        <img src={rasm1}/>
                    </div>
                </div>
                <div className="footer">
                    <h6>Don't have an accaunt yet?</h6>
                    <p>Join Now</p>
                </div>
            </div>
            </div>
        )
    }
}
