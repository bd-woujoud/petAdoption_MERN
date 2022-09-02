import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { CreateEspece, DeleteEspece, GetAllEspece, selectAllEspece, selectCreateEspece, selectDeleteEspece, selectupdateEspece, UpdateEspece } from '../features/espece/especeSlice'
import { Modal } from 'antd';

import GetAdmin from './GetAdmin'

function GestionAAdmin() {
    const [espece, setEspece] = useState({})
    const [nom_Espece, setNomEspece] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const especes = useSelector(selectAllEspece)
    const addEspece = useSelector(selectCreateEspece)
    const deleteEspece = useSelector(selectDeleteEspece)
    const updatespece = useSelector(selectupdateEspece)
    const dispatch = useDispatch()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const add_espece = e => {

        if (e.key === 'Enter') {
            let data = {

                nom_Espece: nom_Espece,
            }

            dispatch(CreateEspece(data))
            setNomEspece('')
        }
    }
      
useEffect(()=>{
    dispatch(GetAllEspece())
},[addEspece,deleteEspece,updatespece])


const handleChange = e => {
    const { name, value } = e.target;
 
    setEspece(prev => ({
        ...prev,

        ['nom_Espece']: value // ihz donnéé mel input ihotha festate

    }))
};


const updateEspece = (Espce) => {
    let data = {
        nom_Espece: espece.nom_Espece,
        id:espece._id
    }
    dispatch(UpdateEspece(data))
    handleCancel()

}

    return (

        <div>
            <div class='container-fluid'>
                <div className="row " style={{ marginTop: "50px" }}>
                    <div class="col-md-9">
                        <div class="dash_blog">
                            <div class="dash_blog_inner">
                                <div class="list_cont">
                                    <h4>Tableau des annonces</h4> {/* liste des annonces+ delete annonce */}
                                </div>
                                <GetAdmin/>
                            </div>
                        </div>
                        </div>
                        {/* espece get */}
                        <div className="col-md-3 ">
                            <div class="white_shd full mt-5 margin_bottom_30">
                                <div class="full graph_head">
                                    <div class="heading1 margin_0">
                                        <span> <h4> Espéce </h4></span>

                                        <div class="modal-body">
                                            <label for="nom_Espece" class="col-form-label">Nouveau_Espéce</label>
                                            <input onKeyDown={add_espece}  value={nom_Espece} onChange={(e) => setNomEspece(e.target.value)}  type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="table_section padding_infor_info">
                                    <div class="table-responsive-sm">
                                        <table class="table  table-striped">
                                            <tbody>
                                            {
                                                    especes.map((c, i) => {
                                                        return (

                                                            <tr key={c._id} >

                                                                <td class="msg_list"> {c.nom_Espece} </td>
                                                                <td><MdOutlineCreate onClick={() => { setEspece(c); showModal() }} style={{ color: "blue", fontSize: '20px', cursor: 'pointer' }} /></td>
                                                                <td><AiOutlineDelete  onClick={() => { dispatch(DeleteEspece(c._id) )}} style={{ color: "red", fontSize: '20px', cursor: 'pointer' }} /></td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
               <Modal footer={null} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <label for="updateesp" class="col-form-label" style={{ color: 'red' }}>Nom_Espéce</label>
                                                    <input onChange={handleChange} value={espece.nom_Espece} type="text" class="form-control" />
                                                </div>

                                                <div class="modal-footer">
                                                    <button onClick={() => updateEspece(espece)} type="button" class="btn btn-primary">Enregistrer</button>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GestionAAdmin
