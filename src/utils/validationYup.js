import { object, string,mixed } from "yup";

let userSchema = object({
    nombre: string().required(),
    telefono: mixed().required(),
    email: string().email().required(), 
})

const validationForm = async(dataForm) => {

try{
 await userSchema.validate(dataForm)
 return {status: "success"}
}catch (error){
    return { status: "error" , message: error.message}
}
}

export default validationForm