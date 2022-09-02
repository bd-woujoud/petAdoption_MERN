import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import user from'../assets/image/user_img.png'
function SideBarAdoptant() {

  return (

    <div>

<nav id="sidebar">

        <div className="sidebar_blog_1">
          <div className="sidebar_user_info">
            <div className="user_profle_side">
              <div className="user_img ml-5 mb-4"><img className="img-responsive" src={user} alt="#" /></div>
            </div>
          </div>
        </div>


        <div className="sidebar_blog_2">

          <ul className="list-unstyled components mt-5">
            <li className="active">
             <Link to="/dashuser" ><i class="fa fa-briefcase mr-2 ml-3 red_color"> </i><span>Mes Annonces</span></Link>

            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">

          <ul className="list-unstyled components">
            <li className="active">
            <Link to="/demande" > <i class="fa fa-table  mr-2 ml-3 blue1_color"></i> <span>Demande d'adoption</span></Link>
            </li>
          </ul>
        </div>


      </nav>

    </div>
  )
}

export default SideBarAdoptant
