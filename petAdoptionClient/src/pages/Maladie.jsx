import React, { useEffect, useState } from 'react'
import '../assets/css/consultation.css'
import Footer from '../Layouts/Footer'
import abc from '../assets/image/veterinaire.JPG'
import Navbar from '../Layouts/Navbar'
import { GetAll, selectAll, selectMaladie } from '../features/symptome/symptomeSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Modal
} from 'antd';
function Maladie() {

    const symptomes = useSelector(selectAll)
    const maladies = useSelector(selectMaladie)
  
        const [symptomesChecked, setSymptomesChecked] = useState([]); 

       const   handleChange=(event) =>{
         
            const target = event.target;
            var value = target.value;
            var symCheckArray=symptomesChecked;
           
            if(target.checked){

                symCheckArray.push(value);  

            }
            else

            {

                symCheckArray.splice(symCheckArray.findIndex( i => i === value ) , 1);
            }
            setSymptomesChecked (symCheckArray);

          console.log(symCheckArray); 
          console.log(symptomesChecked);

          }

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(GetAll())

    }, [])

const Consulter=()=>{ 

axios.post('http://localhost:4000/maladie/getBySymptomes', {symptomes: symptomesChecked})
.then(res=>{console.log(res.data.data,'zzzzzzzz');

}
)
}

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

            <div class="container-fluid rounded bg-white mt-5 mb-5" >
                <div class="row">
                    <div class="col-md-6 border-right" >
                       
                   <img src={abc}></img> <span className='p-5 '> 
                    
                        Pour garder votre chien en bonne santé, une visite annuelle chez le vétérinaire est conseillée,
                        mais quoi qu’il en soit, vous devez prêter une grande attention au comportement de votre animal. 
                        Il ne vous “dira” pas qu’il souffre, par contre vous pourrez le déceler :
                         manque d’appétit, abattement, agressivité, tout comportement inhabituel peut être le signe d’un dysfonctionnement et nécessitera un rendez-vous.
                          Les chiens âgés doivent être particulièrement surveillés.</span></div>
                    <div class="col-md-5 border-right ">
                        <div class="p-3 ">
                        <h4 class="text-center pb-5" style={{ color: '#eb651c', fontSize: '30px', fontWeight: 'bold' }}>Fiche de consultation</h4>
                            <h6 style={{ color: "green", fontWeight: "bold" }}> Sélectionnez les Symptômes apparus</h6>
                            <div class="row mb-5 mt-2">
                                  <div class="col-md-12 ">
                                        {
                                            symptomes.map((e, i) => {
                                                return (
                                                    <div class="col-md-8 ml-5">
                                                    <div class="form-check form-check-inline">
                                                        <input value={e._id}  onChange={handleChange}  class="largerCheckbox" type="checkbox" name="symptomes" id={e._id} defaultValue="option1" />
                                                        <label class="form-check-label" htmlFor={e._id}>{e.nom}</label><br></br>
                                                    </div> </div>
                                                )
                                            })
                                        }
                                    </div>
                            </div>
                          </div>
                        <div class="mb-5" style={{marginLeft:'500px'}}><button onClick={Consulter} class="btn btn-primary profile-button"><span onClick={showModal}>Consulter</span></button></div>
                       
                        <Modal title="New message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

<div class="modal-body">
    <form  >
        <div class="form-group">
            <p>votre animal peut ètre affecté par ces maladies:{[maladies.nom]}</p>
        
            <input type="text" disabled class="form-control" id="recipient-name"  />
        </div>
    
    </form>

</div>

</Modal></div>
                </div>
            </div>

        <Footer className="mt-5" />







        </div >
    )
}
export default Maladie
