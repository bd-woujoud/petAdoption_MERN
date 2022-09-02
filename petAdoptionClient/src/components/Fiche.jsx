import React, { useContext, useState } from 'react'
import '../assets/css/PAdoptant.css'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import { Modal, Button } from 'antd';
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { AuthContext } from '../context/AuthContext'
import swal from 'sweetalert';

function Fiche() {

    const [to, setTo] = useState('')
    const [message, setMessage] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalVisible(true);
    };
    const {user}=useContext(AuthContext)

    const handleOk = () => {

        let data = {

            to: localStorage.getItem('emaimado'),
            message: message,
            adoptant : user._id,
            post  : localStorage.getItem('singlepostid')
        }
            axios.post('http://localhost:4000/users/sendMail', data)
                .then(res => {
                    console.log(res );
                })
                
       
        swal({
            title: "bien fait!",
            text: "votre demande d'adoption  a été envoyée au propriataire !",
            icon: "success",
            button: "ok!",
          }); 
          setIsModalVisible(false);
    }


    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div>

            <Navbar />

            <div class="container-fluid rounded bg-white mt-5 mb-5" >
                <div class="row">
                    <div class="col-md-3 border-right" >
                        <h4 class="text-center " style={{ color: '#eb651c', fontSize: '30px', fontWeight: 'bold' }}>Fiche de renseignement </h4>
                    </div>
                    <div class="col-md-9 border-right ">
                        <div class="p-3 py-5">

                            <p style={{ fontSize: '20px' }}>Nous vous remercions pour votre volonté d’adopter un de nos pensionnaires !
                                Afin de vous guider au mieux dans votre démarche d’adoption,
                                nous avons besoin d’en savoir un peu plus sur vous !
                                Remplir votre profil d’adoption facilitera l’accompagnement
                                de nos équipes et permettra également un gain de temps lors de votre venue.</p>
                            <br></br><br></br>
                            <h6 style={{ color: "green", fontWeight: "bold" }}>VOS PRÉFÉRENCES</h6>

                            <div class="row mb-5">

                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Âge maximum de préférence ? *</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Peu importe
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Junior
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Adulte
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Senior
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Avez-vous des animaux en ce moment dans votre foyer ?*</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Chien</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Chat</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Non</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <div>
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                        <label class="form-check-label" htmlFor="inlineCheckbox1">Autre</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Taille / Corpulence préféréé *</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Petit
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Moyenne
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Grande
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Peu importe
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Avez-vous déjà eu des animaux domestiques ?*</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        oui
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Nom
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h6 style={{ color: "green", fontWeight: 'bold' }}>VOTRE FOYER</h6>

                            <div class="row mb-5">

                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Votre type de logement *</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Maison
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Appartement
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Studio
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Dans quel environnement ? *</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Ville</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Banlieue</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Campagne</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Cochez les cases qui correspondent à votre logement :*</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        J'ai un jardin ouvert
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">

                                                        J'ai un jardin clotûré
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">

                                                        Je n'ai pas d'accès extérieur
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        J'ai un balcon
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">

                                                        J'ai une cour clotûrée
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">

                                                        J'ai une terrasse
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Avez-vous déjà eu des animaux domestiques ?*</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        oui
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label class="form-check-label" htmlFor="exampleRadios1">
                                                        Nom
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h6 style={{ color: "green", fontWeight: 'bold' }}>VOTRE FAMILLE</h6>

                            <div class="row mt-2">

                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Décrivez-nous un peu votre caractère et votre mode de vie en cochant les cases qui vous correspondent :*</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Calme</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Casanier</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Dynamique</label>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5"><p style={{ fontWeight: 'bold' }}>Avez-vous des enfants ? *</p>
                                    <div>

                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Oui</label>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                    <label class="form-check-label" htmlFor="inlineCheckbox1">Nom</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" onClick={showModal} >Suivant</button></div>

                        </div>
                    </div>

                </div>
                <Modal title="New message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                    <div class="modal-body">
                        <form  >
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">to:</label>
                                <input type="text" disabled class="form-control" id="recipient-name" value={localStorage.getItem('emaimado')} onChange={(e) => setTo(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </form>

                    </div>

                </Modal>
            </div>




            <Footer />







        </div>
    )
}
export default Fiche