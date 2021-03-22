function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem-central");
    var fundo = window.document.getElementById("section1");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    msg.innerHTML = `<h1>Agora são ${hora} horas e ${minutos} minutos</h1>` ;
    var text = `e também ${segundos} segundos.`;
    msg.innerHTML += '<br>' + `<p>${text}</p>`;
    msg.style.font = "normal bold 15px arial,serif";
    msg.style.color = "white";

    var header = document.querySelectorAll(".batata");
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = '/exercicio 1/assets/manha.jpg';
        fundo.style.background = "#c5ebea";
        document.body.style.background = "#31d6d2";
        msg.style.color = "black";
        header[0].style.color = "black";
        header[1].style.color = "black";

    } else if (hora >=12 && hora < 18) {
        // BOA TARDE
        img.src = '/exercicio 1/assets/tarde.jpg';
        fundo.style.background = "#face93";
        document.body.style.background = "#ed931c";
        msg.style.color = "black";
        header[0].style.color = "black";
        header[1].style.color = "black";
    
    } else {
        //BOA NOITE
        img.src = '/exercicio 1/assets/noite.jpg';
        fundo.style.background = "rgba(65, 26, 91, 0.2)";
        document.body.style.background = "rgba(4, 33, 108, 0.72)";
        header[0].style.color = "white";
        header[1].style.color = "white";
    }
}