// Nombre *
// Marca
// Categoría *
// Descripcion corta *

const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z ÁáÉéÍíÓóÚúÑñ]+$");
    return regex.test(string);
};

const validateStgLength = (stg, minLength, maxLength) => {
    const regex = new RegExp(`^.{${minLength},${maxLength}}$`);

    if (!regex.test(stg)) {
        return `Debe tener entre ${minLength} y ${maxLength} caracteres.`;
    }

    return true;
};

// Precio *
// Stock *
// Edad desde y hasta

const validatePostiveNumber = (num) => num >= 0;

const validateInt = (num) => Number.isInteger(num);

// Foto *

// Emails

const validateEmails = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
