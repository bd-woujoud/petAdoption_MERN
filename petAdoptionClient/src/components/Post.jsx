
import React, { useEffect } from 'react'
import { IoMdMale } from 'react-icons/io'
import { IoMdFemale } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAnnonceById, GetbyId } from '../features/post/postSlice'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom'
function Post({ annonce }) {
 
const history = useHistory()
  return (

    <>
      <div class='col-md-4'>
        <div class="block-7">
          <Card >
            <Card.Img variant="top" src={'http://localhost:4000/getfile/' + annonce.image} style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title><h5 class="number text-primary" >{annonce.nom} <h6 class="f-miniAnimals_sexe float-right ">
                {
                  
                annonce.sexe === 'male' ? <IoMdMale style={{ color: "black" }} /> : <IoMdFemale style={{ color: "black" }} />

                }

              </h6></h5></Card.Title><hr></hr>
              <Card.Text>
                <h6 class="number ">{annonce.espece.nom_Espece}</h6>
                <h6 class="number">{annonce.age} mois</h6>
                <h6 class="number">{annonce.addresse}</h6> 
              </Card.Text>
              <button onClick={() => {  localStorage.setItem('singlepostid', annonce._id)  ; history.push('/details') }} class="btn btn-primary d-block  py-3" style={{ backgroundColor: '#1594C2', width: "100px", height: '50px' }}>Details</button>
            </Card.Body>
          </Card>
        </div></div>
    </>

  )
}

export default Post


