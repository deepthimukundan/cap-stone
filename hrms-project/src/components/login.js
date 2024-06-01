import React, {useState} from "react";
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Inputbox from "./Input/InputBox";
import SubmitButton from "./Button/SubmitButton";
import './pages.css'

const Login = () => {
    const [empdata, setEmployee] = useState({emailid:"", password:""})

    const handleChange = () =>{

    }

    const handleClick = () =>{

    }

    return(
        <div className="centers">
            <form  className="forms">
            <h1 className="h1">Login</h1>
            <div className='componentDiv'>
                <Inputbox 
                    type="text" 
                    name="emailid" 
                    value={empdata.emailid}
                    label="email id" 
                    placeholder="Enter email id" 
                    handleChange={handleChange}
                />
                <Inputbox 
                    type="text" 
                    name="emailid" 
                    value={empdata.password}
                    label="password" 
                    placeholder="Enter password" 
                    handleChange={handleChange}
                />
                <div className="button">
                    <SubmitButton varient="contained" label="Log in" handleClick={handleClick}/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login