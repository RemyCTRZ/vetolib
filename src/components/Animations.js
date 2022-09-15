export const Open = () => {

    let dropdown = document.getElementById("dropdown");

    if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
        dropdown.classList.add("closed");
    }

    else {
        dropdown.classList.remove("closed");
        dropdown.classList.add("open");
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