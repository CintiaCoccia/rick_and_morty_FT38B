
export default function validation(input) {
    // input es userData {email, password}
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const regexPass = new RegExp("[0-9]");
    const errors = {};

    if(!regexEmail.test(input.username)) {
        errors.username = "El nombre debe ser una dirección de correo electrónico";
    }
    if(!input.username) {
        errors.username = "el nombre es obligatorio";
    }
    if(input.username.length > 35) {
        errors.username = "Máximo 35 caracteres";
    }
    if(!regexPass.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un número "
    }
    if(input.password.length < 6 && input.password.length > 10){
    errors.password = " La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors;
}