
const postModel = require('../Models/postModel');
const { postValidation } = require('../validation/postValidation');


module.exports = {

    createpost: function (req, res) {
        
        const { error } = postValidation(req.body);

        if (error)
        return res.status(500).json({

            message: 'user data validation error',
            success: false,
            errors: error
        })
        else {

        let img = req.file

        if ((img.mimetype == 'image/png') && (img.mimetype == 'image/jpg')) {
            res.json({ msg: 'please enter a valid extention' })/////attachement
        }

        else {

            req.body = {
                nom: req.body.nom,
                sexe: req.body.sexe,
                espece: req.body.espece,
                age: req.body.age,
                description: req.body.description,
                image: req.file.filename,
                adoptant: req.body.adoptant
            }
            postModel.create( req.body, (err, post) => {

                      if (err) {
                          res.json({
                          message: "error created annonce" + err,
                          data: null,
                          status: 500,
                        
                        });
                
                      } else {
                        res.json({
                          message: "seccuss created annonce",
                          data: post,
                          status: 200,
                        });
                      }
                    });
                  }
                }    

    },



    getOnepost: function (req, res) {

        postModel.findById({ _id: req.params.id }).populate('espece').populate('adoptant').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'post',
                    success: true,
                    data: data
                })
        })
    },


    Allpost: function (req, res) {

        postModel.find({}).populate('espece', 'nom_Espece').populate('adoptant', 'email').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'posts',
                    success: true,
                    data: data
                })
        })
    },


    AllpostbyuserId: function (req, res) {

        postModel.find({ adoptant: req.params.id }).populate('espece').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err
                    })
            else
                res.status(200).json({
                    message: 'posts',
                    success: true,
                    data: data
                })
        })
    },

    getPostbyEspece: function (req, res) {

        postModel.find({ espece: req.params.id }).populate('espece').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err
                    })
            else
                res.status(200).json({
                    message: 'posts',
                    success: true,
                    data: data
                })
        })
    },

    deletepost: function (req, res) {

        postModel.findByIdAndDelete({ _id: req.params.id }, function (err, post) {

            if (err) {
                res.json({
                  message: "error deleted annonce" + err,
                  data: null,
                  status: 500,
                });
              } else {
                res.json({
                  message: "seccuss delted annonce",
                  data: post,
                  status: 200,
                });
              }
        }

        )
    },

    updatepost: function (req, res) {

        postModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, post) {

            if (err) {

                res.json({ message: 'error update post' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update post', data: post, status: 200 })
            }
        }

        )
    },




    Searchpost: function (req, res) {

        console.log(req.query.keyword);

        const { keyword } = req.query

        postModel.find(req.params.keyword !== '' ? {
            $or: [{ nom: { $regex: keyword, $options: 'i' } },
                // { adresse: { $regex: keyword, $options: 'i' } },
                // { age: { $regex: keyword, $options: 'i' } },

            ]
        } : {})

        
            .populate('espece')
            .then(posts => {

                res.status(200).json({
                    message: 'all posts found',
                    data: posts
                })
            })
            .catch(err => {

                res.status(500).json({
                    message: err,
                    status: 500
                })
            })




    }



}