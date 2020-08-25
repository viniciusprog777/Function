const numSquare = document.querySelector('#numExer01');
const calcSquare = document.querySelector('#btnCalc01');
const resul01 = document.querySelector('#resultado01');


const num01 = document.querySelector('#num01Exer02');
const num02 = document.querySelector('#num02Exer02');
const calcMaiorMenor = document.querySelector('#btnCalc02');
const resul02 = document.querySelector('#resultado02');


const name01 = document.querySelector('#nameExer03');
const estado = document.getElementsByName('radEstado');
const enviar01 = document.querySelector('#btnEnviar01');
const resul03 = document.querySelector('#resultado03');
var testaEstado;



const name02 = document.querySelector('#nameExer04');
const prof = document.getElementsByName('chk');
const enviar02 = document.querySelector('#btnEnviar02');
const resul04 = document.querySelector('#resultado04');
var interesses;

console.log(estado);

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
    for (let i=0;i<=est.length;i++){ 
        if (est[i].checked == true){ 
            testaEstado =  est[i].value;
            break;
        }  
        
    }
    return name + " mora no estado de " + testaEstado;
}

const exer03 = () =>{
    resul03.innerHTML = nameEst(name01.value, estado);
}


const nameProf = (nome, profission) => {
    let interesses = "";

    for (let i=0;i<=profission.length -1 ;i++){ 
        if (profission[i].checked == true){ 
            interesses = interesses + profission[i].value + ", ";

        }  
        
    }
    return interesses + "são as aréas de interesse de " + nome;
}

const exer04 = () =>{
    resul04.innerHTML = nameProf(name02.value, prof);
}


calcSquare.addEventListener( 'click' , exer01);
calcMaiorMenor.addEventListener( 'click' , exer02);
enviar01.addEventListener('click', exer03);
enviar02.addEventListener('click', exer04);
