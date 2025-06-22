import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/registration.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
    const Registration = ()=>{
        const [firstname,setfirstname] = useState('')
        const [lastname,setlastname] = useState('')
        const [mobileno,setmobileno] = useState('')
        const [email,setemail] = useState('')
        const [password,setpassword] = useState('')
        const [forminfo,setforminfo] = useState('')
        const [formname,setformname] = useState('')
        const [buttonName,setbuttonName] = useState('')
        const location = useLocation()
        const params = useParams()
        const navigate = useNavigate()
        console.log(location.pathname.split('/')[1])
        const handleFirstname = (event)=>{
            setfirstname(event.target.value)
        }
        const handleLastname = (event)=>{
            setlastname(event.target.value)
        }
        const handleMobileno = (event)=>{
            setmobileno(event.target.value)
        }
        const handleEmail = (event)=>{
            setemail(event.target.value)
        }
        const handlePassword = (event)=>{
            setpassword(event.target.value)
        }
        const handleSubmit = (event)=>{
            event.preventDefault()
            console.log(firstname,lastname,mobileno,email,password)
            let formData = {firstname:firstname,lastname:lastname,mobileno:mobileno,email:email,password:password}
            if(location.pathname.split('/')[1] == 'edit'){
                axios.put('https://api.uncodecart.com/users/updateuser/'+params.id,formData).then((response)=>{
                   navigate('/userlist')
                })
            }
            if(location.pathname.split('/')[1] == 'Registration'){
                axios.post('https://api.uncodecart.com/users/registration',formData).then((response)=>{
                    setforminfo(response.data.message)
                    setfirstname('')
                    setlastname('')
                    setmobileno('')
                    setemail('')
                    setpassword('')

                })
            }
            if(location.pathname.split('/')[1] == 'login'){
                axios.post('https://api.uncodecart.com/users/login/',formData).then((response)=>{
                  if(response.data.message == 'Either password or email is wrong'){
                    setforminfo('Either password or email is wrong')
                  }else{
                    navigate('/userlist')
                  }
                })
            }
        }
        useEffect(()=>{
            if(location.pathname.split('/')[1] == 'Registration'){
                setformname('Registration form')
                setbuttonName('Registration')
            }
            if(location.pathname.split('/')[1] == 'edit'){
                setformname('Edit form')
                setbuttonName('Update')
            }
            if(location.pathname.split('/')[1] == 'login'){
                setformname('login form')
                setbuttonName('login')
            }
        })
        return(
            <div id="form-top-container">
            <div id="form-container">
                <div class="header-form">{formname}</div>
                <div class="info">{forminfo}</div>
                <form class="form">
            {buttonName != 'Login' && 
                <>
                <div class="input-box">
                    <label for="firstname">First name </label>
                    <input type="text" placeholder="First name" value={firstname} onChange={handleFirstname}/>
                </div>
                <div class="input-box">
                    <label for="lastname">Last name </label>
                    <input type="text" placeholder="Last name" value={lastname} onChange={handleLastname}/>
                </div>
                <div class="input-box">
                    <label for="mobileno">Mobile no </label>
                    <input type="text" placeholder="Mobile no" value={mobileno} onChange={handleMobileno}/>
                </div>
                </>
                }
                <div class="input-box">
                    <label for="email">Email </label>
                    <input type="text" placeholder="Email" value={email} onChange={handleEmail}/>
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="text" placeholder="Password" value={password} onChange={handlePassword}/>
                </div>
                <input type="submit" value={buttonName} onClick={handleSubmit}/>
                </form>
                </div>
            </div>

        )
    }
    export default Registration
