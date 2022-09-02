

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import { message } from 'antd'
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,

} from 'antd';
import { Navbar } from 'react-bootstrap';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;






function Register(props) {

    const [role, setrole] = useState('');
    const { setUser, setIsAuth } = useContext(AuthContext);
    const [errors, setErrors] = useState([])


    const onFinish = (values) => {
        console.log('Success:', values);
        values.role = role
        AuthService.register(values).then(jsonData => {
            if (!jsonData.error) {
                setUser(jsonData.user);
                setIsAuth(jsonData.isAuthenticated);
                success()
                props.history.replace("/login")

            }
            else {
                console.log("...register error...", jsonData)
error()

            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

     const error = (jsonData) => {
                   message.error("...register error...", jsonData.msg);
           };

    const success = () => {

        message.success('Welcome between us');
    };



    return (

        <div>
          
            <div class="container-fluid ">
                <div class="row justify-content-center ">
                    <div class="col-xs-12 col-sm-6 col-md-6 registre ">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6  mb-5 " style={{ marginTop: "100px", fontSize: "40px", color: "black" }}>

                        <p class="text-center mt-3 mb-5" > Créer votre compte</p>
                        <>


                            <Form name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 10,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"

                            >


                                <Form.Item
                                    name="nom"
                                    label="Nom"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Nom!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>



                                <Form.Item
                                    name="prenom"
                                    label="Prenom"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your prenom!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="tel"
                                    label="telephone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone Number!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="E-mail"

                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>



                                <Form.Item name='gender' label="Register Now" style={{ align: "right" }}>
                                    <Button onClick={() => setrole('adoptant')} type="primary" htmlType="submit" style={{ align: "right", background: "orange" }}> Enregistrer</Button>
                                </Form.Item>
                            </Form>
                        </>
                    </div></div></div>

        </div>

    )


}
export default Register
