
const joi = require('@hapi/joi')

const postValidation = data => {

       const schema = joi.object({



              nom: joi.string()
                     .required()

              ,
              description: joi.string()
                     .required()
              ,

              age: joi.number()
                     .required()

              ,
              sexe: joi.string()
                     .required()

              ,
              adresse: joi.string()
                     .required()

              ,
              espece: joi.string()
                 .required()
              ,
              image: joi.string()
                 .required()
       })

       return schema.validate(data, { abortEarly: false })
}

module.exports = {
       postValidation,
}