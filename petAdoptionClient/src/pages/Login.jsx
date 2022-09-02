
import React, { useContext, useState } from 'react'
import '../assets/css/loginRegistre.css'
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
function Login() {

const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const { setUser, setIsAuth } = useContext(AuthContext);

const loginuser = (e) => {

    e.preventDefault();

    let data = {

        email: email,
        password: password

    }
    AuthService.login(data).then(jsonData => {
        
      if (jsonData.message==='errors connect'){
        alert("verifier votre email et mot de passe")
 
     }

        if (!jsonData.error) {
            setUser(jsonData.user);
            localStorage.setItem('user', JSON.stringify(jsonData.userData))
            setIsAuth(jsonData.isAuthenticated);
           { jsonData.user.role==="admin" ?window.location.href = '/dashAdmin':window.location.href = '/dashuser'} 
        }

        else {
            console.log("...register error...", jsonData)
        }
    })

}

    return (
        <div>
            <div class="container-fluid  bg">
                <div class="row justify-content-center">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <form class="form-container white" >
                            <p class="text-center " style={{ Color: "white", fontSize: "30px" }}> Login</p>
                            <hr />
                            <div class="form-group">
                                <label for="username">Username <sup>*</sup></label>
                                <input value={email} onChange={(e) => setemail(e.target.value)} type="text" class="form-control" id="username" name="username" placeholder="Username" required="" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password <sup>*</sup></label>
                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" class="form-control" id="password" name="password" placeholder="Password" required="" />
                            </div>
                            <button onClick={loginuser} type="submit" id="btnn" class="btn  form-control mb-5 mt-2"  >Se connecter</button>
                            <p id="signuplink ">  Don't have an account ? <a  href="/register">Sign Up</a> here</p>
                        </form>

                    </div>
                </div>

            </div></div>
    )
}

export default Login