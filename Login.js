import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./SignUp.css"

export default function Login() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()
    // const [cpassword,setCpassword]=useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data === "Success")
            navigate('/Home')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='main'>
            <div className='login-container'>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='heading'>Login Form</h1>

                        <div>
                            {/* <div className='content'>
                                <label>Name : </label>
                                <input 
                                type="text" 
                                className='input'
                                placeholder='Enter Name'
                                name='name'
                                onChange={(e)=>setName(e.target.value)}
                                />
                            </div> */}

                            <div className='content'>
                                <label htmlFor="email">Email : </label>
                                <input type="email" 
                                className='input'
                                placeholder='Enter Email'
                                name='email'
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='content'>
                                <label htmlFor="password">Password : </label>
                                <input 
                                type="password"  
                                id="" 
                                className='input'
                                placeholder='Enter Password'
                                name="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>

                            {/* <div className='content'>
                                <label htmlFor="cpassword">Confirm Password : </label>
                                <input type="cpassword" 
                                id="" 
                                className='input'
                                placeholder='Confirm Your Password'
                                name='cpassword'
                                onChange={(e)=>setCpassword(e.target.value)}
                                />
                            </div>  */}

                            {/* <div className='button-align'>
                                Already have an account? : <Link to="/login" id='sp'>Login</Link>
                            </div> */}
                            <div className='button-align'>
                                <button className='btn'>Sumbit</button>
                            </div>
                            

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
