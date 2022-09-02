
import React, { useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
import SideBarPrincipal from '../Layouts/SideBarPrincipal'
import axios from 'axios'
import moment from 'moment'
import { BsFileImage } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { GetDemande, selectGetDemande } from '../features/demande/demandeSlice'
function Demande() {

const demandes =useSelector(selectGetDemande)
const dispatch= useDispatch()
    useEffect(() => {
dispatch(GetDemande())

      
    },[])
    return (

        <div>
            <SideBarPrincipal /><div id="content">
                <div className="row" style={{ marginLeft: '50px', marginTop: '100px' }}>
                    <div className="col-md-6">
                        <div className="white_shd full margin_bottom_30">
                            <div className="full graph_head">
                                <div className="heading1 margin_0">
                                    <h4>Mes demandes envoyées</h4>
                                </div>
                            </div>
                            <div className="table_section padding_infor_info mt-5">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Email </th>
                                                <th>image</th>
                                                <th>Nom_proprietaire</th>
                                                <th>Téléphone</th>
                                                <th>Adresse</th>
                                                <th>date_demande</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                demandes.map((d, i) => {
                                                    return (
                                                        <tr>
                                                            <td>{d.adoptant.email} </td>
                                                            <td> <a href={'http://localhost:4000/getfile/' + d.post.image} target='_blank'><BsFileImage style={{ fontSize: '15px' }} /></a></td>
                                                            <td>{d.adoptant.nom}</td>
                                                            <td>{d.adoptant.tel}</td>
                                                            <td>{d.post.adresse}</td>
                                                            <td>{moment(d.createdAt).format('DD-MM-YYYY')}</td>
                                                        </tr>
                                                    )
                                                })

                                            }
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demande