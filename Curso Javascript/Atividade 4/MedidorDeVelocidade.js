// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos forem maior que 12 -> "Carteira suspendida"

verificarVelocidade(81);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) /kmPorPonto));
        if( pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}