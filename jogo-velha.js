const X = "X";
const O = "O"; 
let jogador = O;
let matriz = [["1", "2", "3"],["4", "5", "6"],["7", "8", "9"]];
let rodada = 0

function reiniciarJogo() {
    location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna){
    if(matriz[posicaoLinha - 1 ][posicaoColuna - 1] != X && matriz[posicaoLinha - 1 ][posicaoColuna - 1] != O){

    if (jogador == O){
        jogador = X;
        marcarJogadorAtivo(O);
    }
        else {
            jogador = O;
            marcarJogadorAtivo(X);
    }
    desenharSimbolo(jogador, posicaoLinha, posicaoColuna);
    matriz[posicaoLinha - 1][posicaoColuna - 1 ] = jogador;
    console.log(matriz);
    verificaPossibilidadeDeVitoria();
    rodada++ 
    if (rodada == 9){
        exibirResultado('Empate, deu velha ):')
    }
}
}

function verificaPossibilidadeDeVitoria(){
//horizontais 
    if ((matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2]) ||
    (matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2]) ||
    (matriz[2][0] == matriz[2][1] && matriz[2][1] == matriz[2][2])){
        exibirResultado('Vitória do '+ jogador + " !");
    }
//verticais 
    if ((matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0]) ||
    (matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1]) ||
    (matriz[0][2] == matriz[1][2] && matriz[1][2] == matriz[2][2])){
    exibirResultado('Vitória do '+ jogador + " !");
    }
//diagonais
    if ((matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2])||
    (matriz[2][0] == matriz[1][1] && matriz[1][1] == matriz[0][2])){
    exibirResultado('Vitória do '+ jogador + " !");
    }
}