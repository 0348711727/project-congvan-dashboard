import axios from "axios";
import React, { Component, useState } from "react";
import reactDom from "react-dom";
 import "../Css/styleAdmin.css";

    // handleOnChange = () =>
    // {

    // }

   function Login()
{
    const [detail, setuserName] = useState({
        userName:"", 
        passWord:""
    });
    
    const hanđleOnSubmit = (e)=>
    {
        e.preventDefault();
        const {userName, passWord} = detail;
        const login_data = {userName, passWord}
        console.log(login_data);
        // console.log(passWord);
    }
    // axios.post("http://localhost:88/HocPHP/form.php", {userName : detail.userName, passWord: detail.passWord}).then((result) =>{
         
    //     })
    
    return(
        <form onSubmit = {hanđleOnSubmit}>
                                        <div>
            <div className="form-group">
                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                <input type="email" name="email" placeholder="Your Email" onChange={e => setuserName({...detail, userName:e.target.value})} />;
            </div>
            <div className="form-group">
                <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={e => setuserName({...detail, passWord:e.target.value})} />;
            </div>
            <div className="form-group form-button">
                <input type="submit" name="login" id="signin" className="form-submit" defaultValue="Login" />
            </div>
            <div className="r-pass">
                <br />
                <a href="account/recovery/">I forget my Password</a>
            </div>
            <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                <li><a href="#"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" /></a></li>
                <li><a href="#"><img src="https://img.icons8.com/bubbles/50/000000/twitter.png" /></a></li>
                <li><a href="#"><img src="https://img.icons8.com/clouds/50/000000/google-logo.png" /></a></li>
                </ul>
            </div>
            </div>

                        </form>
    )
}

export default Login