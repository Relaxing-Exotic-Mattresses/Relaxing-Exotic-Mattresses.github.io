function cores() {
    let hora = ((new Date() % 86400000) / 3600000) - 3;
    let corpo = document.querySelector("body"), navbar = document.querySelector("header");

    let alteraCor = (elemento, cor) => elemento.style.backgroundColor = cor;

    if (hora >= 5 && hora < 7){
        alteraCor(corpo, "#CEF2F6");
    } else if (hora >= 7 && hora < 12) {
        alteraCor(corpo, "#ACE8F0");
    } else if (hora >= 12 && hora < 17) {
        alteraCor(corpo, "#A7D0F5");
    } else if (hora >= 17 && hora < 19) {
        alteraCor(corpo, "#8AAAE8");
    } else if (hora >= 19 && hora < 23) {
        alteraCor(corpo, "#486EB8");
    } else {
        alteraCor(corpo, "#091582");
        alteraCor(navbar, "#000B32");
    }

}
cores();

let envio = document.querySelector("#enviar");
let modal = document.querySelector("#modal");

let sumir = () => {
    modal.style.animationName = "sumir";
    setTimeout(() => modal.style.display = "none", 2000);
}

envio.addEventListener("click", () => {
    let nome = document.querySelector("#individuo").value;
    let nossoProfessorFavorito = 0, tambemConhecidoComo = ["francisco", "paulo", "freitas", "neto"];

    let checagem = pauloFreitas => { if (nome.toLowerCase().includes(pauloFreitas)) nossoProfessorFavorito++; }

    tambemConhecidoComo.forEach(checagem);

    if (nossoProfessorFavorito > 1) {
        modal.style.display = "flex";
        modal.style.animationName = "aparecer";

        setTimeout(() => sumir(), 15000);
    }
});

document.querySelector("#modal").addEventListener("click", () => sumir());