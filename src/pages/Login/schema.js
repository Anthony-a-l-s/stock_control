import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validationPassword } from "../../utils/validations";
/*function verifyPassword(password, confirmPassword) {
    return this.test("verifyPassword", ({password: password, confirm: confirmPassword}), function (value) {
        const { path, createError } = this;
        console.log(value)
        if (value.password !== value.confirmPassword) {
            return createError({
                path,
                message: "As senhas devem ser iguais"
            });
        }
        return true;
    });

}*/

function isValidPassword(password) {
    return this.test("isValidPassword", password, function (value) {
        const { path, createError } = this;
        var msg = validationPassword(value)
        console.log(msg)
        if (msg != "true") {
            return createError({
                path,
                message: msg
            });
        }
        return true;
    });
}



//yup.addMethod(yup.mixed, "verifyPassword", verifyPassword);
yup.addMethod(yup.mixed, "isValidPassword", isValidPassword);

const schema = yup.object({

    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres ').required('Campo obrigatório'),
})

export default schema