import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


import SideBarAdmin from './SideBarAdmin'
import SideBarAdoptant from './SideBarAdoptant'
function SideBarPrincipal() {

  const { user } = useContext(AuthContext)


  return (
    

    <div>

{
user.role==="admin" ?


<SideBarAdmin />:

<SideBarAdoptant />

}

      </div>

  )
}

export default SideBarPrincipal
