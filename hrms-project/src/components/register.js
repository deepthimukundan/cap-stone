import React, {useState} from "react";
import { connect } from 'react-redux'
import { registerAction } from '../redux/register/registerAction'

import { useNavigate } from 'react-router-dom'

import Inputbox from "./Input/InputBox";
import SubmitButton from "./Button/SubmitButton";
import './pages.css'

function Registration(props) {
    const [empdata, setEmployee] = useState({name:"", emailid:"", eId:"",password:""})
    const navigate= useNavigate()

    const handleChange = (val1,val2) => {
        setEmployee({ ...empdata, [val1]:val2})
    }
 
    const handleClick = () => {
          props.registerAction(empdata);
    }

    React.useEffect( () => {
        console.log("inside")
        if(props.regSuccessAuth ){
          navigate('/login')
        }
    },[props.regSuccessAuth])

    return (
        <div className="centers">
                <form  className="forms">
                <h1 className="h1">Registration Form</h1>
                    <Inputbox
                        type="text" 
                        name="name" 
                        label="Employee Name"
                        value={empdata.name} 
                        placeholder="Enter employee Name" 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="email" 
                        name="emailid" 
                        label="Email id" 
                        placeholder="Enter your Email id" 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="number" 
                        name="eId" 
                        label="Employee Id" 
                        placeholder="Enter Employee Id" 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="password" 
                        name="password" 
                        label="Password" 
                        placeholder="Enter a new password" 
                        handleChange={handleChange} 
                    /> <br/>
                    <div className="button">
                        <SubmitButton varient="contained" label="Submit" handleClick={handleClick}/>
                    </div>
                </form>
        </div>
    );
}
    
const mapStateToProps = (state) => {
    return{
        empData: state.registerReducer.emp,
        regSuccessAuth: state.registerReducer.regSuccessAuth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      registerAction: (empdata) => dispatch(registerAction(empdata))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration)
