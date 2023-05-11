d = new Date();

let diadomes = d.getDate();
let nomedodia = d.getDay();
if (nomedodia == '0'){
    nomedodia = "Domingo";
}
if (nomedodia == '1'){
    nomedodia = "Segunda-feira";
}
if (nomedodia == '2'){
    nomedodia = "Terça-feira";
}
if (nomedodia == '3'){
    nomedodia = "Quarta-feira";
}
if (nomedodia == '4'){
    nomedodia = "Quinta-feira";
}
if (nomedodia == '5'){
    nomedodia = "Sexta-feira";
}
if (nomedodia == '6'){
    nomedodia = "Sábado";
}
let mes = d.getMonth();
if(mes == 0){
    mes = "Janeiro";
}
if(mes == 1){
    mes = "Fevereiro";
};
if(mes == 2){
    mes = "Março";
};
if(mes == 3){
    mes = "Abril";
};
if(mes == 4){
    mes = "Maio";
};
if(mes == 5){
    mes = "Junho";
};
if(mes == 6){
    mes = "Julho";
};
if(mes == 7){
    mes = "Agosto";
};
if(mes == 8){
    mes = "Setembro";
};
if(mes == 9){
    mes = "outubro";
};
if(mes == 10){
    mes = "novembro";
};
if(mes == 11){
    mes = "Dezembro";
};
ano = d.getFullYear();

let dia = document.querySelector(".nomedodia");
dia.innerHTML = nomedodia;
let numero = document.querySelector(".numerododia");
numero.innerHTML = diadomes;
let nomemes = document.querySelector(".nomedomes");
nomemes.innerHTML = mes;
let nomeano = document.querySelector(".nomedoano");
nomeano.innerHTML = ano;