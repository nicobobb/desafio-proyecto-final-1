function displayToast() {
    // Crear el elemento toast
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast__container border-success w-30";

    // Crear el elemento h4 (título)
    const title = document.createElement("h4");
    title.className = "toast__title";
    title.textContent = "Felicitaciones!";

    // Crear el elemento p (descripción)
    const description = document.createElement("p");
    description.className = "toast__description";
    description.textContent = "Enviamos correctamente tu mensaje";

    // Agregar los elementos al toast en el orden deseado
    toast.appendChild(title);
    toast.appendChild(description);

    // Agregar el toast al cuerpo del documento (o al elemento que desees)
    const formSection = document.querySelector(".form__section");
    formSection.appendChild(toast);

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
