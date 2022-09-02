import React from 'react'
import { Link } from 'react-router-dom'

import admin from '../assets/image/admin.png'
function SideBarAdmin() {

  return (

    <div>

      <nav id="sidebar" >

        <div className="sidebar_blog_1">
          <div className="sidebar_user_info">
            <div className="user_profle_side">
              <div className="user_img ml-5 mb-4"><img className="img-responsive" src={admin} alt="#" /></div>
            </div>
          </div>
        </div>


        <div className="sidebar_blog_2">
          <ul className="list-unstyled components mt-5">
            <li className="active">
              <Link to='/dashAdmin'><i class="fa fa-briefcase mr-2 ml-3 red_color" > </i><span>Annonces</span></Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/listuser'><i class="fa fa-table  mr-2 ml-3 blue1_color"></i> <span>Users</span></Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/article' ><i class="fa fa-object-group mr-2 ml-3 yellow_color"> </i><span>Articles</span></Link>
            </li>
          </ul>
        </div>

      </nav>

    </div>
  )
}

export default SideBarAdmin
