
const especeModel = require('../Models/especeModel');

module.exports = {
    

    createespece: function (req, res) {

        especeModel.create(req.body, function (err, espece) {

            if (err) {

                res.json({ message: 'error add espece' + err, data: null, status: 500 })
            }

            else {

                res.json({ message: 'success add espece', data: espece, status: 200 })

            }
        }

        )
    },


    getOneespece: function (req, res) {
        especeModel.findById({ _id: req.params.id }).populate('post').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'espece',
                    success: true,
                    data: data
                })
        })
    },



    Allespece: function (req, res) {
        especeModel.find({}).populate('post').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'especes',
                    success: true,
                    data: data
                })
        })
    },




    deleteespece: function (req, res) {

        especeModel.findByIdAndDelete({ _id: req.params.id }, function (err, espece) {

            if (err) {

                res.json({ message: 'error delete espece', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success delete espece', data: espece, status: 200 })
            }
        }

        )
    },

    updateespece: function (req, res) {

        especeModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, espece) {

            if (err) {

                res.json({ message: 'error update espece', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update espece', data: espece, status: 200 })
            }
        }

        )
    },

}