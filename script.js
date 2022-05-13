let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
   
    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja 355ML</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Garrafas de Bebidas 2 Litros</p>`
}

function carnePP(durcao) {
    if (durcao >= 6) {
        return 650;
    } else{
        return 400;
    }
} 

function cervejaPP(durcao) {
    if (durcao >= 6) {
        return 2000;
    } else{
        return 1200;
    }
} 

function bebidaPP(durcao) {
    if (durcao >= 6) {
        return 1000;
    } else{
        return 1500;
    }
} 
