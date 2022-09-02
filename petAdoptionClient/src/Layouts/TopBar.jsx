import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import { AuthContext } from '../context/AuthContext'
import AuthService from '../services/AuthService'



function TopBar() {

  const { isAuth } = useContext(AuthContext)
  const { user } = useContext(AuthContext)

  const { setUser, setIsAuth } = useContext(AuthContext);
  const history=useHistory()

  function handleLogout() {
    AuthService.logout().then(jsonData => {
      if (jsonData.success) {
        setUser(jsonData.user);
        setIsAuth(false)
        console.log("..logout")
       
        window.location.href = '/login'

      }
      else{
        window.location.href = '/home'
      }
    })
  }
  
  return (
    <div>

      <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="full">

            <div className="right_topbar">
              <div className="icon_info">

                <ul className="user_profile_dd " >

                  <li class="nav-item"><a class="nav-link" href="/home">Acceuil</a></li>
                  <li class="nav-item"><a class="nav-link" href="/maladie">Consultation</a></li>
 


                  {

                    isAuth ?
                    <ul className="user_profile_dd " >{ user.role==='admin' ?
                    <li class="nav-item"><a class="nav-link" href="/dashadmin">dashboard</a></li>:
                    <li class="nav-item"><a class="nav-link" href="/dashuser">dashboard</a></li>
                    }
                        <li> <button class="btn btn-primary" style={{ marginRight: "10px" }}  onClick={handleLogout}>Log Out</button>

                      </li></ul>:
                      <>
                        <li class="nav-item"><button class="btn btn-primary " style={{ marginRight: "10px" }} onClick={() => history.push ('/login')} >Login</button>
                          <button class="btn btn-primary " onClick={() => history.push ('/register')}>Register Now!</button></li>
                      </>
                  }
                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>



    </div>
  )
}

export default TopBar
