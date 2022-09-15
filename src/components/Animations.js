export const Open = () => {

    let dropdown = document.getElementById("dropdown");
    let logo = document.getElementById("logo");

    if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
        dropdown.classList.add("closed");
    }

    else {
        dropdown.classList.remove("closed");
        dropdown.classList.add("open");
    }

    if (logo.classList.contains("open")) {
        logo.classList.remove("open");
        logo.classList.add("closed");
    }

    else {
        logo.classList.remove("closed");
        logo.classList.add("open");
    }

}

export const Login = () => {

    let Connexion = document.getElementById("Connexion");

    if (Connexion.classList.contains("open")) {
        Connexion.classList.remove("open");
        Connexion.classList.add("closed");
    }

    else {
        Connexion.classList.remove("closed");
        Connexion.classList.add("open");
    }
}