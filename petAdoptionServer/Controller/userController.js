
const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken');
const validateuser = require('../validation/userValidation');
const nodemailer = require('nodemailer');
const { Error } = require('mongoose');

const SignToken = (uid, role) => {

    return jwt.sign({

        id: uid,
        role: role,

    }, process.env.JWT_SECRET, { expiresIn: '1h' });// sauvegarde de cle secret jwt_secret dans le dossier dotenv
}

module.exports = {

    registre: (req, res) => {
        const { email, password, role } = req.body;
    
            userModel.findOne({ email }, function (err, user) {

                if (err)

                    return res.status(500).json({ msg: err.message, error: err })

                if (user)

                    return res.status(400).json({ msg: "User already exist", error: true })

                else {

                    const newUser = new userModel(req.body)

                    newUser.email = req.body.email,
                        newUser.password = req.body.password,
                        newUser.nom = req.body.nom,
                        newUser.prenom = req.body.prenom,
                        newUser.tel = req.body.tel,
                        newUser.role = req.body.role,

                        newUser.save((err, user) => {

                            if (err)

                                return res.status(500).json({ msg: err.message, error: true })
                            else {

                                return res.status(200).json({ isAuthenticated: true, user: { email, role }, error: false })
                            }
                        })
                }
            }
            )
        

    },




    login: (req, res) => {

        const { _id, email, role } = req.user;
        const token = SignToken(_id);

        res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });

        return res.status(200).json({ isAuthenticated: true, user: { email, role, token }, userData: req.user })
    }
    ,

    logout: (req, res) => {

        res.clearCookie("access_token");
        res.status(200).json({

            isconnected: false,
            message: "succesffully logged out",
        })

    },


    //Check auth status everytime front-end app refreshes
    authenticated: function (req, res) {

        const { email, role ,_id} = req.user;
        return res.status(200).json({ isAuthenticated: true, user: { email, role ,_id} })

    },




    getOneuser: function (req, res) {

        userModel.findById({ _id: req.params.id }.populate('post').exec((err, user) => {

            if (err) {

                res.json({ message: ' error' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: ' user by id in DB', data: user, status: 200 })
            }
        })

        )
    },




    Alluser: function (req, res) {

        userModel.find({}, ((err, user) => {

            if (err) {

                res.json({ message: ' error', data: null, status: 500 })
            }
            else {

                res.json({ message: ' all user  in DB', data: user, status: 200 })
            }
        })

        )
    },


    
    Alluserbyrole: function (req, res) {

        userModel.find({role:"adoptant"}, ((err, user) => {

            if (err) {

                res.json({ message: ' error', data: null, status: 500 })
            }
            else {

                res.json({ message: ' all user  in DB', data: user, status: 200 })
            }
        })

        )
    },


    deleteuser: function (req, res) {

        userModel.findByIdAndDelete({ _id: req.params.id }, function (err, user) {

            if (err) {

                res.json({ message: 'error delete user', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success delete user', data: user, status: 200 })
            }
        }

        )
    },

    updateuser: function (req, res) {

        userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, user) {

            if (err) {

                res.json({ message: 'error update user', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update user', data: user, status: 200 })
            }
        }

        )
    },

    sendMail: function (req, res, next) {

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: "gmail",
            port: 465,
            secure: true,
            auth: {

                user: process.env.MAIL,// generated ethereal user
                pass: process.env.PASS // generated ethereal password
            }
        });

        console.log(process.env.PASS);

        var mailOptions = {

            from: process.env.MAIL,  // sender address
            to: req.body.to,// list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.text, // plain text body
            html: "hhhhhhhh"
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json({ message: 'error ' + error });
            } else {

                req.demande = {
                    adoptant: req.body.adoptant,
                    post: req.body.post
                }
                
                next()
            }
        })

    },

}








