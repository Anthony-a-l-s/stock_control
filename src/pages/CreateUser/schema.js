import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validationPassword } from "../../utils/validations";


function isValidPassword(password) {
    return this.test("isValidPassword", password, function (value) {
        const { path, createError } = this;
        var msg = validationPassword(value)
        if (msg != "true") {
            return createError({
                path,
                message: msg
            });
        }
        return true;
    });
}



yup.addMethod(yup.mixed, "isValidPassword", isValidPassword);

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    userName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres ').required('Campo obrigatório'),
    confirmPassword: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres ').required('Campo obrigatório'),
})

export default schema