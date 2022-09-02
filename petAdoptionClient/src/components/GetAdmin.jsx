import React from 'react'

import { DeletebyId,selectAllPosts } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti'
import moment from 'moment'
import {message } from 'antd'

import { BsFileImage } from 'react-icons/bs'


function GetAdmin() {

  
    const posts=useSelector(selectAllPosts)
    
    const dispatch = useDispatch()
 

    return (
        <div>

            {/* tableau getannonce+delete*/}

            <div class="table-responsive-sm">
                <table class="table table-striped projects">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>nom</th>
                            <th>age</th>
                            <th>sexe</th>
                            <th>espece</th>
                            <th>image</th>
                             <th>adresse</th>
                            <th>Date_Publication</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            posts.map((p, i) => {
                                
                                return (

                                    <tr>
                                        <td>{i}</td>
                                        <td>{p.nom}</td>
                                        <td>{p.age}</td>
                                        <td>{p.sexe}</td>
                                        <td>{p.espece.nom_Espece}</td>
                                        <td> <a href={'http://localhost:4000/getfile/' + p.image} target='_blank'><BsFileImage style={{ fontSize: '15px' }} /></a></td>
                                        <td>{p.adresse}</td>
                                        <td> {moment(p.createdAt).format('DD-MM-YYYY')}</td>
                                        <td> 
                                            <TiDeleteOutline onClick={() => { dispatch(DeletebyId(p._id))}} style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} />
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

</div>
    )
}

export default GetAdmin