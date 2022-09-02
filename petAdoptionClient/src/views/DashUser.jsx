import React from 'react'



import SideBarPrincipal from '../Layouts/SideBarPrincipal'
import ContentUser from './ContentUser'

function DashUser() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <ContentUser/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashUser
