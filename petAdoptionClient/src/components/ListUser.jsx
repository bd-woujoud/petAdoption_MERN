
import React, { useEffect } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import  { DeleteAdoptant, GetAllAdoptant, selectAllAdoptant, selectdeleteAdoptant } from '../features/adoptant/adoptantSlice'
import { message } from 'antd'
import SideBarPrincipal from '../Layouts/SideBarPrincipal'

function ListUser() {

const adoptants=useSelector(selectAllAdoptant)
const deletes=useSelector(selectdeleteAdoptant)
const dispatch=useDispatch()

useEffect(()=>{

dispatch(GetAllAdoptant())

},[deletes])

const success = () => {

    message.success('annonce deleted successefly');
};

    return (
        <div>
            <SideBarPrincipal/><div id="content">

            <div class=" col-md-10 white_shd full margin_bottom_30" style={{ marginLeft: '50px', marginTop: '100px' }}>
                <div class="full graph_head">
                    <div class="heading1 margin_0">
                        <h2> liste des Utilisateurs</h2>
                    </div>
                </div>
                <div class="full price_table padding_infor_info">

                    <div class="table-responsive-sm">
                        <table class="table table-striped projects">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Téléphone</th>
                                    <th>Email</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                    adoptants.map((a,i)=>
                                <tr>
                                    <td>{i}</td>
                                    <td>{a.nom}</td>
                                    <td>{a.prenom}</td>
                                    <td>{a.tel}</td>
                                    <td>{a.email}</td>
                                    
                                <td>
                                        <TiDeleteOutline onClick={() => { dispatch(DeleteAdoptant(a._id) );success()}} style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                </tr>
                              )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div></div>
        </div>


    )
}

export default ListUser