

import React, { useState }  from 'react'

import { UploadOutlined} from '@ant-design/icons';
import { Upload,Button} from 'antd';
import { Modal } from 'antd'

function CreateArticle(article) {
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

        <>
        
            <span class="plus_green_bt" onClick={showModal} style={{ cursor: 'pointer' }}>+</span>

            <Modal footer={null} title="Ajouter un nouvau article " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                <div class="modal-body" >
                    <form >
                       
                        <div class="form-group" style={{ height: '50px' }}>

                            <input style={{ height: '50px', color: 'black', fontSize: '15px' }}  type="text" class="form-control" placeholder="Titre d'article" />

                        </div>

                        <div class="form-group" style={{ height: '50px' }}>

                            <input style={{ height: '50px', color: 'black', fontSize: '15px' }}  type="text" class="form-control" placeholder='description' />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                        <Upload name="logo" action="/upload.do" listType="picture">
           <Button icon={<UploadOutlined />}>Click to upload</Button>
         </Upload>
                        </div>
  
                    </form>
                </div>

                <div class="modal-footer" >
                    <button type="button" class="btn btn-primary" >Ajouter Article </button>
                </div>


            </Modal>

        </>
    )
}

export default CreateArticle
