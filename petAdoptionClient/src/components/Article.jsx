import React  from 'react'
import { BsPencilSquare} from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'

import { Modal} from 'antd';
import CreateArticle from './CreatreArticle';




function GestionArticle(offre) {

  
    
    return (

        <div>
   
            <div class="dash_blog " >
                <div class="dash_blog_inner">
                    <div class="dash_head">
                        <h3 style={{ color: 'black' ,fontWeight:'bold'}}><span><i class="fa fa-reorder"></i> Articles</span> <CreateArticle /></h3>
                    </div>
                    <div class="list_cont">
                        <p>Mes Articles</p>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table table-striped projects">
                            <thead class="thead-dark">
                                <tr>
                                    <th>aaa</th>
                                    <th>aaa</th>
                                    <th>aaaa</th>
                                    <th>aaaa</th>
                                    <th>aaaaa</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >

                                
                               
                                            <tr  >
                                                <td>ggg</td>
                                                <td>jhh</td>
                                                <td>jjj</td>
                                                <td>jjj</td>
                                                <td>hhh</td>
                                                <td><BsPencilSquare  style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                                    <TiDeleteOutline style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                            </tr>
                                            <tr  >
                                                <td>ggg</td>
                                                <td>jhh</td>
                                                <td>jjj</td>
                                                <td>jjj</td>
                                                <td>hhh</td>
                                                <td><BsPencilSquare  style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                                    <TiDeleteOutline style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                            </tr>
                                            <tr  >
                                                <td>ggg</td>
                                                <td>jhh</td>
                                                <td>jjj</td>
                                                <td>jjj</td>
                                                <td>hhh</td>
                                                <td><BsPencilSquare  style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                                    <TiDeleteOutline style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                            </tr>
                                    
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GestionArticle
