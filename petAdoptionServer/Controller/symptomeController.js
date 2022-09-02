
const symptomeModel = require('../Models/syptomeModel');

module.exports = {
    

    createsymptome: function (req, res) {

        symptomeModel.create(req.body, function (err, symptome) {
            if (err) {

                res.json({ message: 'error add symptome' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: 'success add symptome', data: symptome, status: 200 })
            }
        }

        )
    },


    getOnesymptome: function (req, res) {
        symptomeModel.findById({ _id: req.params.id }).exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'symptome',
                    success: true,
                    data: data
                })
        })
    },



    Allsymptome: function (req, res) {
        symptomeModel.find({}).exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error',
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'symptomes',
                    success: true,
                    data: data
                })
        })
    },




    deletesymptome: function (req, res) {

        symptomeModel.findByIdAndDelete({ _id: req.params.id }, function (err, symptome) {

            if (err) {

                res.json({ message: 'error delete symptome', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success delete symptome', data: symptome, status: 200 })
            }
        }

        )
    },

    updatesymptome: function (req, res) {

        symptomeModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, symptome) {

            if (err) {

                res.json({ message: 'error update symptome', data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update symptome', data: symptome, status: 200 })
            }
        }

        )
    },

}