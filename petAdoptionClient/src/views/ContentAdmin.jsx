
import React  from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import 'antd/dist/antd.css'
import { Modal } from 'antd';
import GestionAAdmin from '../components/GestionAAdmin';
import { BsPencilSquare } from 'react-icons/bs'
import TopBar from '../Layouts/TopBar';


function ContentAdmin() {

    return (

        <div> <div id="content">
     
            <div class='main ml-5'>
                    <GestionAAdmin />
            </div>

            </div>
        </div>
    )
}


export default ContentAdmin
