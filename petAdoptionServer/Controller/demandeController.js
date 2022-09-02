
const demandeModel = require('../Models/demandeModel');

module.exports = {


    createdemande: function (req, res) {

       req.demande = {

                    adoptant: req.body.adoptant,
                    post: req.body.post
                }

        let data = {
            
            adoptant: req.demande.adoptant,
            post: req.demande.post

        }

        demandeModel.create(data, function (err, demande) {

            if (err) {
                res.status(500).json({
                    success: false,
                    message: "error create demande",
                    errors: { details: [{ path: ['global'], message: 'something went wrong',error:"err"+err }] }
                })
            } else {

                res.status(200).json(demande)
            }

        })

    },

    getOnedemande: function (req, res) {
        demandeModel.findById({ _id: req.params.id }).populate('post').populate('adoptant').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'demande',
                    success: true,
                    data: data
                })
        })
    },



    Alldemande: function (req, res) {
        demandeModel.find({}).populate('post').populate('adoptant').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err
                    })
            else
                res.status(200).json({
                    message: 'demandes',
                    success: true,
                    data: data
                })
        })
    },




    deletedemande: function (req, res) {

        demandeModel.findByIdAndDelete({ _id: req.params.id }, function (err, demande) {

            if (err) {

                res.json({ message: 'error delete demande', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success delete demande', data: demande, status: 200 })
            }
        }

        )
    },

    updatedemande: function (req, res) {

        demandeModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, demande) {

            if (err) {

                res.json({ message: 'error update demande', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update demande', data: demande, status: 200 })
            }
        }

        )
    },

}