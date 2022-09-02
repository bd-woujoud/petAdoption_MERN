import React from 'react'
import CreateAnnonce from '../components/CreateAnnonce';
import GetAnnonceAdoptant from '../components/GetAnnonceAdoptant';
import TopBar from '../Layouts/TopBar';



function ContentUser() {
 
    return (

        <div>
            <div id="content">
                <TopBar />
                <div class='main ml-5 pl-5'>
                    <div class="dash_blog" style={{ marginTop: "100px", width: '80%' }}>
                        <div class="dash_blog_inner">
                            <div class="dash_head">
                                <h3 style={{ color: 'black', fontWeight: 'bold' }}><span><i class="fa fa-reorder"></i> <CreateAnnonce /></span> </h3>
                            </div>
                            <div class="list_cont">
                                <p> Mes Annonces Publiées</p>
                            </div>
                           <GetAnnonceAdoptant/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentUser
