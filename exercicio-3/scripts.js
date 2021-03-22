function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var age = idade;
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            
        } else if (fsex[1].checked){
            genero = 'Mulher';
        }

       if (idade < 4) {
        age = 'bebê';
        img.setAttribute ('src', './assets/bebe.png');   
       } else if (idade >=4 && idade <13) {
        age = 'criança';
        img.setAttribute ('src', './assets/criança.png');
       } else if (idade >=13 && idade <20) {
        age = 'adolescente';
        img.setAttribute ('src', './assets/adolescente.png');
       } else if (idade >= 20 && idade < 40) {
        age = 'adulto';
        img.setAttribute ('src', './assets/adulto.png');
       } else if (idade >= 40 && idade < 60) {
        age = 'tiozão';
        img.setAttribute ('src', './assets/tiozão.png');
       } else if (idade >= 60) {
        age = 'idoso';
        img.setAttribute ('src', './assets/velho.png');
       }

        res.style.textAlign ='center';
        res.innerHTML = `Detectamos ${genero}, ${age} com ${idade} anos` + '<br><br>';
        res.appendChild(img);
    }
}