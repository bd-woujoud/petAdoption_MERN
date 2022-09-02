import React, { useContext, useEffect, useState } from 'react'

import { DeletebyId, GetAllPost, GetPostByUser, selectAddPosts, selectAllPosts, selectdeletePosts, selectgetByUser, selectupdatePosts, UpdatePost } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencilSquare } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import moment from 'moment'
import { cities } from '../mocks/cities';
import { Modal, message } from 'antd'
import { BsFileImage } from 'react-icons/bs'
import { AuthContext } from '../context/AuthContext';
import { GetAllEspece, selectAllEspece } from '../features/espece/especeSlice';


function GetAnnonceAdoptant() {

    const { user } = useContext(AuthContext)
    const [upPost, setUpPost] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);
    const especes = useSelector(selectAllEspece)
    const posts = useSelector(selectgetByUser)

    useEffect(() => {
        dispatch(GetAllEspece())
    }, [])


    const dispatch = useDispatch()

    const showModal = (id) => {
        setIsModalVisible(true);
        setUpPost(posts.find(p => p._id === id)) //bech tjibli les inputs m3abin selon id
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleUpdate = () => {

        let data = {

            nom: upPost.nom,
            age: upPost.age,
            sexe: upPost.sexe,
            espece: upPost.espece,//ijibli le9dima
            adresse: upPost.adresse,
            image: upPost.image,
            description: upPost.description,
            id: upPost._id,   //bech y3adi el update
        }

        console.log(data, 'rrrrrrrrrrr');
        dispatch(UpdatePost(data))
        handleOk()

    };

    const handlechange = e => {
        const { value, name } = e.target
        setUpPost(prev => ({
            ...prev,
            [name]: value

        }))
    }
    
    const addpost = useSelector(selectAddPosts)
    const updates = useSelector(selectupdatePosts)
    const deletes = useSelector(selectdeletePosts)

  useEffect(() => {
    dispatch(GetPostByUser(user._id))
  }, [addpost,updates,deletes])


    return (
        <div>

            {/* tableau getannonce+delete+update */}

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
                                            <BsPencilSquare onClick={() => showModal(p._id)} style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                            <TiDeleteOutline onClick={() => { dispatch(DeletebyId(p._id))}} style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

            <Modal title="update" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {/* form for update */}

                <br />

                <form >
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Nom_animal <sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <input value={upPost.nom} onChange={handlechange} type="text" id="fname" name="nom" placeholder="nom de l'animal.." />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">age<sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <input value={upPost.age} onChange={handlechange} type="text" id="lname" name="age" placeholder="age de l'animal.." />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="sexe">sexe<sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <select id="sexe" name="sexe" onChange={handlechange} >

                                <option value={upPost.sexe} ></option>

                                <option value="male">Male</option>
                                <option value="femelle">Femelle</option>
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="espece">Espéce<sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <select id="espece" name="espece" onChange={handlechange}>
                                <option value={upPost.espece} ></option>
                                {
                                    especes.map((c, i) => {
                                        return (
                                            <option value={c._id} >{c.nom_Espece}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="adresse">Adresse<sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <select id="adresse" name="adresse" onChange={handlechange} >
                                <option value={upPost.adresse} ></option>
                                {
                                    cities.map((c, i) => {
                                        return (
                                            <option key={i} value={c}>{c}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="description">Description <sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <textarea value={upPost.description} onChange={handlechange} id="description" name="description" placeholder="Write something.." style={{ height: 100 }} defaultValue={""} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="description">photo <sup>*</sup></label>
                        </div>
                        <div className="col-75">
                            <div class="my-3">

                                <input onChange={handlechange} class="form-control" type="file" name="image " id="formFile" />
                            </div>
                        </div>
                    </div>

                    <br />
                </form>

                <div class="modal-footer" >
                    <button type="button" class="btn btn-primary" onClick={handleUpdate} >Enregistrer</button>
                </div>

            </Modal>

        </div>
    )
}

export default GetAnnonceAdoptant