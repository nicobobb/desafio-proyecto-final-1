function displayToast(titleShow, descriptionShow) {
    // Crear el elemento toast
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast__container border-success w-30";

    // Crea el elemento h4
    const title = document.createElement("h4");
    title.className = "toast__title";
    title.textContent = titleShow;

    // Crea el elemento p
    const description = document.createElement("p");
    description.className = "toast__description";
    description.textContent = descriptionShow;

    toast.appendChild(title);
    toast.appendChild(description);

    // Agrega el toast al cuerpo del documento
    const formSection = document.querySelector(".form__button");
    const formSectionParent = formSection.parentNode;
    formSectionParent.insertBefore(toast, formSection);

    if (toast.className.includes("fade-out")) {
        toast.className = toast.className.replace("fade-out", "fade-in");

        setTimeout(() => {
            toast.className = toast.className.replace("fade-in", "fade-out");
        }, 7000);
    } else if (toast.className.includes("fade-in")) {
        toast.className = toast.className.replace("fade-in", "fade-out");
    } else {
        toast.className = toast.className.concat(" fade-in");

        setTimeout(() => {
            toast.className = toast.className.replace("fade-in", "fade-out");
        }, 4000);
    }
}
