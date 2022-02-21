let qS = html => document.querySelector(html);

function cores() {
    let hora = (((new Date() - (3 * 3600000)) % 86400000) / 3600000);
    let corpo = qS("body");

    let alteraFundo = (elemento, cor) => elemento.style.backgroundColor = cor;

    if (hora >= 5 && hora < 7){
        alteraFundo(corpo, "#CEF2F6");
    } else if (hora >= 7 && hora < 12) {
        alteraFundo(corpo, "#ACE8F0");
    } else if (hora >= 12 && hora < 17) {
        alteraFundo(corpo, "#A7D0F5");
    } else if (hora >= 17 && hora < 19) {
        alteraFundo(corpo, "#8AAAE8");
    } else if (hora >= 19 && hora < 23) {
        alteraFundo(corpo, "#486EB8");
    } else {
        alteraFundo(corpo, "#091582");

        let alteraCor = (elemento, cor) => elemento.style.backgroundColor = cor;

        let mudanca = (sequencia, cor, funcao) => {
            for (let i = 0; i<sequencia.length; i++){
                if (sequencia[i].length) {
                    mudanca(sequencia[i], cor, funcao);
                } else {
                    funcao(sequencia[i], cor);
                }
            }
        }

        let azulEscuro = [qS("header"), qS("#nome"), qS("#email"), qS("#mensagem"), document.querySelectorAll("button")];
        let branco = [qS("#titulo"), qS("h1"), qS("#texto"), document.querySelectorAll("input")];

        mudanca(azulEscuro, "#000B32", alteraFundo);
        mudanca(branco, "#dadada", alteraFundo);
        qS("#titulo").style.borderColor = "#afafaf";

        azulEscuro[4][0].style.cursor = "pointer";
        azulEscuro[4][1].style.cursor = "pointer";
    }

}
cores();

let envio = qS("#enviar");
let modal = qS("#modal");

let sumir = () => {
    modal.style.animationName = "sumir";
    setTimeout(() => modal.style.display = "none", 2000);
}

envio.addEventListener("click", () => {
    let nome = qS("#individuo").value;
    let nossoProfessorFavorito = 0, tambemConhecidoComo = ["francisco", "paulo", "freitas", "neto"];

    let checagem = pauloFreitas => { if (nome.toLowerCase().includes(pauloFreitas)) nossoProfessorFavorito++; }

    tambemConhecidoComo.forEach(checagem);

    if (nossoProfessorFavorito > 1 && window.screen.width == 1366 && window.screen.height == 768) {
        modal.style.display = "flex";
        modal.style.animationName = "aparecer";

        setTimeout(() => sumir(), 15000);
    }
});

qS("#modal").addEventListener("click", () => sumir());