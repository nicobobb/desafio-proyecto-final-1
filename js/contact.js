const onSubmitContact = (e) => {
    e.preventDefault();
    let validForm = true;
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("mail");
    const commentInput = document.getElementById("comment");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("mailError");
    const commentError = document.getElementById("commentError");

    // Nombre
    if (validateStrings(nameInput.value)) {
        const validStg = validateStgLength(nameInput.value, 3, 20);
        if (validStg === true) {
            nameInput.ariaInvalid = false;
            nameError.innerText = "";
            nameError.style.display = "none";
        } else {
            nameInput.ariaInvalid = true;
            nameError.innerText = validStg;
            nameError.style.display = "block";
            validForm = false;
        }
    } else {
        nameInput.ariaInvalid = true;
        nameError.innerText = "Debe colocar caracteres alfanuméricos";
        nameError.style.display = "block";
        validForm = false;
    }

    //Email
    if (validateEmails(emailInput.value)) {
        emailInput.ariaInvalid = false;
        emailError.innerText = "";
        emailError.style.display = "none";
    } else {
        emailInput.ariaInvalid = true;
        emailError.innerText = "Ingrese un email correctamente";
        emailError.style.display = "block";
        validForm = false;
    }

    //Comment
    const validComment = validateStgLength(commentInput.value, 20, 50);
    if (validComment === true) {
        commentInput.ariaInvalid = false;
        commentError.innerText = "";
        commentError.style.display = "none";
    } else {
        commentInput.ariaInvalid = true;
        commentError.innerText = validComment;
        commentError.style.display = "block";
        validForm = false;
    }

    if (validForm) {
        const newComment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value,
        };
        const stgComment = JSON.stringify(newComment);
        localStorage.setItem("message", stgComment);
        form.reset();
        displayToast();
    }
};
