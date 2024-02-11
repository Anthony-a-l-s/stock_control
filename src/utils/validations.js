

export function veryfyEmpty(text){
    if(text === ''){
        return 'Campo obrigatório';
    }else{
        return;
    } 
}



export function validationPassword(password){
    var validation = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if (password.length < 8) {
        return validation;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;
    for (var i = 0; i < password.length; i++) {
        if (letrasMaiusculas.test(password[i])) auxMaiuscula++;
        else if (letrasMinusculas.test(password[i])) auxMinuscula++;
        else if (numeros.test(password[i])) auxNumero++;
        else if (caracteresEspeciais.test(password[i])) auxEspecial++;
    }
    if (auxMaiuscula > 0) {
        if (auxMinuscula > 0) {
            if (auxNumero > 0) {
                if (auxEspecial) {
                    validation = true;
                }
            }
        }
    }
    return validation;
}