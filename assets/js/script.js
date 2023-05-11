//teste de resposta da api
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e75bcf99f4e569616b55e5549862d8f2

//variáveis e selecionando os elementos
const api = "e75bcf99f4e569616b55e5549862d8f2";
const apiCountryURL = "https://countryflagsapi.com/svg/";
const cidade = document.getElementById("cidade");
const botao = document.getElementById("botao");
const descricao = document.getElementById("nuvens");
const imagem = document.getElementById("imagem");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const velocidade = document.getElementById("velocidade");
const nascer = document.getElementById("nascer");
const por = document.getElementById("por");
const bandeira = document.getElementById("location");


const nomecidade = document.getElementById("nomedacidade");
const graus = document.getElementById("graus");
const cardtempo = document.getElementById("cared-tempo");


//minhas funções
const pegardados = async (city) => {
    const apiWeatherURl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=e75bcf99f4e569616b55e5549862d8f2`;

    let resultado = await fetch(apiWeatherURl);
    let dados = await resultado.json();
    console.log(dados);
    return dados;
    cidade.value = '';
}
const mostrar = async (city) => {

    let dados = await pegardados(city);


    nomecidade.innerHTML = `${dados.name}`;
    graus.innerHTML = `${dados.main.temp.toFixed(1)} °C`;
    descricao.innerHTML = dados.weather[0].description;
    imagem.setAttribute("src", `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`);


    let valornascer = dados.sys.sunrise;
    let valorpor = dados.sys.sunset;
    console.log(valornascer, valorpor);
    var nascerformat = new Date(valornascer * 1000);
    var porformat = new Date(valorpor * 1000);
    console.log(nascerformat);
    console.log(porformat);

    let horanascer = nascerformat.getHours();
    let minutonascer = nascerformat.getMinutes();
    let segundosnascer = nascerformat.getSeconds();
    console.log(horanascer, minutonascer, segundosnascer)
    if (horanascer < 10) {
        horanascer = "0" + horanascer;
    }
    if (minutonascer < 10) {
        minutonascer = "0" + minutonascer;
    }
    if (segundosnascer < 10) {
        segundosnascer = "0" + segundosnascer;
    }

    let horapor = porformat.getHours();
    let minutopor = porformat.getMinutes();
    let segundospor = porformat.getSeconds();
    if (horapor < 10) {
        horapor = "0" + horapor;
    }
    if (minutopor < 10) {
        minutopor = "0" + minutopor;
    }
    if (segundospor < 10) {
        segundospor = "0" + segundospor;
    }





    latitude.innerHTML = dados.coord.lat
    longitude.innerHTML = dados.coord.lon
    velocidade.innerHTML = `${dados.wind.speed}`

    nascer.innerHTML = `${horanascer}:${minutonascer}:${segundosnascer}`;
    por.innerHTML = `${horapor}:${minutopor}:${segundospor}`;

    cidade.value = '';



}
////////////////////////////////////////////////////////////
////////////////CONSUMINDO API UNSPLASH////////////////////
///////////////////////////////////////////////////////////
botao.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cidade.value;
    mostrar(city);
    const card = document.getElementById("infos");
    card.classList.remove("hide");
    let cidadefoto = document.getElementById("cidade").value;
    document.getElementById("corpo").style.backgroundImage = `url("https://source.unsplash.com/1920x1280/?${cidadefoto}")`;
    bandeira.setAttribute("src", `https://countryflagsapi.com/svg/${dados.sys.country}`);
    console.log(dados.sys.country);


})

// const pegarimagem2 = async (link) =>{
//     let cidadefoto = document.getElementById("cidade").value;
//     console.log(cidadefoto);
//     const api = `https://api.unsplash.com/search/photos?query=&${cidadefoto}&page=1&per_page=1&orientation=portrait&client_id=xU0DxNXO-bSAdWj2o7lVsv3EDaZ4VclF5dDmcQwis7A`;
//     const resultimg = await fetch(api);
//     const resultado = await resultimg.json();
//     console.log(resultado);
//     return link;
// }

// const mostrarimagem = async (link)=>{
//     let imagem2 = await pegarimagem(link);
//     let cardtempo = document.getElementById("card-tempo");
//     cardtempo.style.backgroundImage = `url("${imagem2.urls.raw}")`;

// }






    // const urlAPIunsplash = `https://api.unsplash.com/search/photos?query=&${cidadefoto}&page=1&per_page=1&orientation=portrait&client_id=xU0DxNXO-bSAdWj2o7lVsv3EDaZ4VclF5dDmcQwis7A`;

    //  valor.style.backgroundImage = "url('https://images.unsplash.com/photo-1568503108317-03193f0f15e5?ixid=Mnw0MDQwMjB8MHwxfHNlYXJjaHwxfHxicmFzaWx8ZW58MHwxfHx8MTY3NDkzOTUzNg&ixlib=rb-4.0.3')";


