import Joi from "joi";

export const dateJoiCustomValidation = (value : any, helper : Joi.CustomHelpers<any>) => {
    const [year, month, day] = value.split('/');

    if ( isNaN( Date.parse(new Date(year, month, day).toString()) ) ) {
        return helper.error("noesfecha");
    }
    
    return value;
}