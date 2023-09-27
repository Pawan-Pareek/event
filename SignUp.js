import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./SignUp.css"

export default function Signup() {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()
    // const [cpassword,setCpassword]=useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{name,email,password})
        .then(result=>{console.log(result)
        navigate('/login')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='main'>
            <div className='container'>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='heading'>SignUp Form</h1>

                        <div>
                            <div className='content'>
                                <label>Name &nbsp;</label>
                                <input 
                                type="text" 
                                className='input'
                                placeholder='Enter Name'
                                name='name'
                                onChange={(e)=>setName(e.target.value)}
                                />
                            </div>

                            <div className='content'>
                                <label htmlFor="email">Email &nbsp;</label>
                                <input type="email" 
                                className='input'
                                placeholder='Enter Email'
                                name='email'
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='content'>
                                <label htmlFor="password">Password &nbsp;</label>
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

                            <div className='button-align'>
                                Already have an account? : <Link to="/login" className='lg'><span>Login</span></Link>
                            </div>
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
