
const maladieModel = require('../Models/maladieModel');

module.exports = {


    createmaladie: function (req, res) {

        maladieModel.create(req.body, function (err, maladie) {

            if (err) {

                res.json({ message: 'error add maladie' + err, data: null, status: 500 })
            }

            else {

                res.json({ message: 'success add maladie', data: maladie, status: 200 })

            }
        }

        )
    },


    getOnemaladie: function (req, res) {
        maladieModel.findById({ _id: req.params.id }).populate('symptomes').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'maladie',
                    success: true,
                    data: data
                })
        })
    },

    getBySymptomes: function (req, res) {console.log(req.body,'aaaaaaaaaaa');
        maladieModel.find({"symptomes":{$in :req.body.symptomes}}).exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err
                    })
            else
                res.status(200).json({
                    message: 'maladie',
                    success: true,
                    data: data
                })
        })
    },



    Allmaladie: function (req, res) {
        maladieModel.find({}).populate('symptomes').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'maladies',
                    success: true,
                    data: data
                })
        })
    },




    deletemaladie: function (req, res) {

        maladieModel.findByIdAndDelete({ _id: req.params.id }, function (err, maladie) {

            if (err) {

                res.json({ message: 'error delete maladie', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success delete maladie', data: maladie, status: 200 })
            }
        }

        )
    },

    updatemaladie: function (req, res) {

        maladieModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, maladie) {

            if (err) {

                res.json({ message: 'error update maladie', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update maladie', data: maladie, status: 200 })
            }
        }

        )
    },

}