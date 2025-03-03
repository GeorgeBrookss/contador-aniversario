
AOS.init();


const aniversario = new Date('Jan 26, 2026  00:00:00');





const diasEmMS = 1000 * 60 * 60 * 24;
const horasEmMs = 1000 * 60 * 60;
const minutosemMS = 1000 * 60;
const segundosEmMs = 1000;



function contador(){
    const dataAtual = new Date();

    const tempoRestante = aniversario - dataAtual;



    const diasRestantes = Math.floor(tempoRestante / diasEmMS);
    const horasRestantes = Math.floor((tempoRestante % diasEmMS) / horasEmMs);
    const minutosRestantes = Math.floor((tempoRestante % horasEmMs) / minutosemMS);
    const segundosRestantes = Math.floor((tempoRestante %  minutosemMS) / segundosEmMs);
    
    document.getElementById('contador').innerHTML = `${diasRestantes}D ${horasRestantes}Hrs ${minutosRestantes}Min ${segundosRestantes}Seg`;


    


}


setInterval(contador, 1000);
