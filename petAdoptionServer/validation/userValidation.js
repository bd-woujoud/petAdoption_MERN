
const joi = require('@hapi/joi')

const userValidation = data => {

    const schema = joi.object({

        nom:joi.string()
               .required()
        
        ,
        prenom:joi.string()
               .required()
        
        ,
        tel:joi.number()
               .required()
               .min(8)
            
        
        ,
        role:joi.string()
       // .required()
        
        ,

        email: joi
            .string()
            .email()
            .required()
     
        ,

        password: joi
            .string()
            .min(6)
            .alphanum()
            .required()

    })

    return schema.validate(data, { abortEarly: false })

}


module.exports = {

    userValidation,
    
}