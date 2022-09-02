import React, { useState } from 'react'
import { EditOutlined } from '@ant-design/icons';
const Profile = () => {

    return (
        <div>

            <br />
            <div  >
                <div class="midde_cont">
                    <div class="container-fluid">
                        <div class="row column1">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="white_shd full ">
                                    <div class="full graph_head">
                                        <div class="heading1 margin_0">
                                            <h2>User profile</h2>
                                        </div>
                                    </div>
                                    <div class="full price_table padding_infor_info">
                                        <div class="row">

                                            <div class="col-lg-12">
                                                <div class="full dis_flex center_text">
                                                    <div class="profile_img"><img width="180" class="rounded-circle" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="#" />
                                                        <div class="contact_inner mt-5 ml-5">
                                                            <h3 >John Smith</h3>

                                                            <ul class="list-unstyled">
                                                                <li><i class="fa fa-envelope-o"></i> : test@gmail.com</li>
                                                                <li><i class="fa fa-phone"></i> : 987 654 3210</li>
                                                            </ul>
                                                        </div></div>
                                                    <div class="profile_contant">



                                                        <div className="col-md-12 ">

                                                            <div className="d-flex justify-content-between align-items-center  text-right">
                                                                <h4 className="">Profile Settings</h4>
                                                                <EditOutlined style={{ fontSize: '30px', color: "blue" }} />
                                                            </div>

                                                            <div className="col-md-12"><label style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }}>Nom</label><input type="text" className="form-control" name="nom" /></div>
                                                            <div className="col-md-12"><label style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }}>Prenom</label><input type="text" className="form-control" name="nom" /></div>
                                                            <div className="col-md-12"><label style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }}>Téléphone</label><input name="téléphone" type="text" className="form-control" /></div>
                                                            <div className="col-md-12"><label style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }}>Email</label><input type="text" className="form-control" name="email" /></div>
                                                            <div className="col-md-12">< label style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }}>Password</label><input type="text" className="form-control" name="password" /></div>
                                                            <div className="mt-4  text-center"><button className="btn btn-primary profile-button" type="button">save</button></div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                </div>

                            </div>
                        </div></div></div></div>
      

        </div>
    )
}

export default Profile
