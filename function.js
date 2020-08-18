const numSquare = document.querySelector('#numExer01');
const calcSquare = document.querySelector('#btnCalc01');
const resul01 = document.querySelector('#resultado01');


const num01 = document.querySelector('#num01Exer02');
const num02 = document.querySelector('#num02Exer02');
const calcMaiorMenor = document.querySelector('#btnCalc02');
const resul02 = document.querySelector('#resultado02');


const name01 = document.querySelector('#nameExer03');
const estado = document.querySelector('.radioEstado');
const enviar01 = document.querySelector('#btnEnviar01');
const resul03 = document.querySelector('#resultado03');



const square = ( numero )  => numero ** 2;
const exer01 = () => {
    resul01.innerHTML = square(numSquare.value);
}


const maiorMenor = (numero01, numero02) => {
    if (numero01 > numero02) {
        return numero01;
    }
    else{
        return numero02;
    }
}
const exer02 = () =>{
    resul02.innerHTML = maiorMenor(num01.value, num02.value);
}


const nameEst = (name, est) => {
    return name + " mora no estado de " + est;
}
const exer03 = () =>{
    resul03.innerHTML = nameEst(name01.value, estado.value);
}
const nameProf = (name, profission) => {
    return
}

calcSquare.addEventListener( 'click' , exer01);
calcMaiorMenor.addEventListener( 'click' , exer02);
enviar01.addEventListener('click', exer03)