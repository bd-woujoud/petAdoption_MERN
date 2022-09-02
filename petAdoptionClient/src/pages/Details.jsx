
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Modal, Button } from 'antd';
import '../assets/css/loginRegistre.css'
import { getAnnonceById, GetbyId, selectOnePosts } from '../features/post/postSlice'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import axios from 'axios';
function Details() {

  const [singlepost, setsinglepost] = useState(null)
  useEffect(() => {
    
    axios.get('http://localhost:4000/post/getOnePost/' + localStorage.getItem('singlepostid'))//id de poste cliké
      .then(res => {
        setsinglepost(res.data.data)
      })
  }, [])


  console.log(singlepost);

  const dispatch = useDispatch()


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (

    <div>
      <Navbar />
     {
       singlepost
       &&
       <section class="ftco-section bg-light">
       <div class="container">
         <div class="row justify-content-center">
           <div class="col-md-12">
             <div class="wrapper">
               <div class="row no-gutters ">
                 <div class="col-md-7">
                   <div class="contact-wrap w-100 p-md-5 p-4">
                     <h3 class="mb-4" style={{ fontWeight: 'bold' }}>Je me presente !</h3>
                     <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                       <div class="row">
                         <div class="col-md-6" >
                           <div class="form-group" >
                             <label class="label" htmlFor="name">Nom:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.nom}</span></label>

                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="form-group">
                             <label class="label" htmlFor="email"> sexe:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.sexe}</span></label>
                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="form-group">
                             <label class="label" htmlFor="subject">age:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.age}</span></label>
                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="form-group">
                             <label class="label" htmlFor="subject">espéce:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.espece.nom_Espece}</span></label>
                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="form-group">
                             <label class="label" htmlFor="subject">Adresse:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.adresse}</span></label>
                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="form-group">
                             <label class="label" htmlFor="subject">Téléphone:<span style={{ color: "black", fontSize: '17px', marginLeft: "10px" }} >{singlepost.adoptant.tel}</span></label>
                           </div>
                         </div>
                         <div class="col-md-12">
                           <div class="form-group">
                             <label class="label" htmlFor="#">description</label>
                             <textarea name="message" class="form-control" id="message" cols={30} rows={4} defaultValue={singlepost.description} />
                           </div>
                         </div><br></br>
                         <div class="col-md-12">
                           <div class="form-group">
                             <h6 style={{ color: "orange", fontSize: "20px" }}>Vous souhaitez l'adopter  ??</h6>
                             <input type="adopte" defaultValue="Appelez" onClick={showModal} class="btn btn-primary float-right mt-4" />
                             <NavLink onClick={() => localStorage.setItem('emaimado' , singlepost.adoptant.email)} to='/fiche'><input type="message" defaultValue="message" class="btn btn-primary float-right mt-4 mr-3" />
                             </NavLink>
                           </div>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>

                 <div class="col-md-5 d-flex align-items-stretch">
                   <img class="info-wrap w-100 p-5 img" src={'http://localhost:4000/getfile/' + singlepost.image}/>
                   </div>
                 </div>

                 <Modal title="Appelez le proprietaire" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                   <a href="tel:94294302" style={{ fontSize: "25px", marginLeft: '20px' }}>{singlepost.adoptant.tel}</a>

                 </Modal>
               </div>

             </div>
           </div>
         </div>
      
     </section>
     }
      <div id="map" class="map mt-5"></div>
      <Footer />

    </div>
  )
}

export default Details