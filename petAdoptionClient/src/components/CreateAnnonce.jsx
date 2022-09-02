

import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'antd'
import { Alert } from 'antd';
import '../assets/css/createpost.css'
import { useDispatch, useSelector } from 'react-redux';
import { CreatePost, selectAddPosts, selectErorrs, selectRegisterStatus } from '../features/post/postSlice';
import { cities } from '../mocks/cities';
import { GetAllEspece, selectAllEspece } from '../features/espece/especeSlice';
import { AuthContext } from '../context/AuthContext';

function CreateAnnonce(article) {
  const [isModalVisible, setIsModalVisible] = useState(false);



  const errors = useSelector(selectErorrs)

  const [nom, setNom] = useState('')
  const [age, setAge] = useState('')
  const [espece, setEspece] = useState('')
  const [adresse, setAdresse] = useState('')
  const [sexe, setSexe] = useState('male')
  const [file, setFile] = useState(null)
  // const [adoptant, setAdoptant] = useState(null)
  const [description, setDescription] = useState('')
  const addpost = useSelector(selectAddPosts)
  const especes = useSelector(selectAllEspece)
  const dispatch = useDispatch()
  const { user } = useContext(AuthContext)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePost = (e) => {

    e.preventDefault();

    let data = new FormData()
    data.append('nom', nom)
    data.append('age', age)
    data.append('sexe', sexe)
    data.append('adresse', adresse)/*back,front*/
    data.append('espece', espece)/*back,front*/
    data.append('image', file)
    data.append('description', description)
    data.append('adoptant', user._id)
    console.log(data, "ooooooooooooooooooooo");
    dispatch(CreatePost(data))

  }


  useEffect(() => {

    if (addpost === 'success') {

      setNom('')
      setAge('')
      setSexe('')
      setEspece('')
      setAdresse('')
      setDescription('')
      setFile('')
      handleOk()
    }

  }, [addpost])


  useEffect(() => {
    dispatch(GetAllEspece())
  }, [])


  const ErrorHandler = ({ name }) => {
    return (
      <>
        {
          errors.map(e => {
            return (
              <>
                {
                  e.path[0] === name
                  &&
                  <span style={{ color: "red" }}  >{e.message}</span>
                }
              </>
            )
          })
        }
      </>
    )
  }



  return (

    <>

      <span class="plus_green_bt" onClick={showModal} style={{ cursor: 'pointer' }}>+</span>
      <Modal footer={null} title="Vous avez un animal à adoptez ? Allez y créer votre annonce !! " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <div class="modal-body" >
          <form >
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Nom_animal <sup>*</sup></label>
              </div>
              <div className="col-75">
                <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" id="fname" name="nom" placeholder="nom de l'animal.." />
                <ErrorHandler name='nom' />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">age<sup>*</sup></label>
              </div>
              <div className="col-75">
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" id="lname" name="age" placeholder="age de l'animal.." />
                <ErrorHandler name='age' />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="espece">Espéce<sup>*</sup></label>
              </div>
              <div className="col-75">
                <select id="espece" name="espece" value={espece} onChange={(e) => setEspece(e.target.value)}>
                  {
                    especes.map((c, i) => {
                      return (
                        <option value={c._id} >{c.nom_Espece}</option>
                      )
                    })
                  }
                </select>
                <ErrorHandler name='espece' />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="sexe">sexe<sup>*</sup></label>
              </div>
              <div className="col-75">
                <select id="sexe" name="sexe" value={sexe} onChange={(e) => setSexe(e.target.value)} >
                  <option value="male">Male</option>
                  <option value="femelle">Femelle</option>
                </select>
                <ErrorHandler name='sexe' />
              </div>

            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="adresse">Adresse<sup>*</sup></label>
              </div>
              <div className="col-75">
                <select name='adresse' onChange={e => setAdresse(e.target.value)} class="form-control" >
                  {
                    cities.map((c, i) => {
                      return (
                        <option key={i} value={c}>{c}</option>
                      )
                    })
                  }
                </select>
                <ErrorHandler name='adresse' />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="description">Description <sup>*</sup></label>
              </div>
              <div className="col-75">
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" placeholder="Write something.." style={{ height: 100 }} defaultValue={""} />
                <ErrorHandler name='description' />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="description">photo <sup>*</sup></label>
              </div>
              <div className="col-75">
                <div class="my-3">
                  <input onChange={(e) => setFile(e.target.files[0])} class="form-control" type="file" name="file" id="formFile" />
                  <ErrorHandler name='image' />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <button onClick={handlePost} type="submit" id="btn" class="btn btn-primary " style={{ marginLeft: '70%' }} > Créer</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default CreateAnnonce
