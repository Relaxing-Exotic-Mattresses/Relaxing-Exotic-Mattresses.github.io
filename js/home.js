let ariana = document.querySelector("#ariana-grande"), corpo = document.querySelector("body");
let cantou = 0;

ariana.addEventListener("click", () => {
    if (cantou === 0) {
        ariana.innerHTML = `<p> - Colaboração com a cantora Ariana Grande que adquiriu um de nossos colchões e cedeu o
                            lucro de sua música "R.E.M" para que ele fosse doado para pessoas necessitadas.</p>
                            <audio src="../midias/ariana-grande.mp3" autoplay></audio>`;
        cantou++;

        setTimeout(() => {
            ariana.innerHTML = `<p> - Colaboração com a cantora Ariana Grande que adquiriu um de nossos colchões e cedeu o
                                lucro de sua música "R.E.M" para que ele fosse doado para pessoas necessitadas.</p>`;
            cantou = 0;
        }, 246000);

    }
});