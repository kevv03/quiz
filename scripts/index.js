const preguntasYRespuestas = `[
    {
        "question": "¿Cual de los siguientes países no pertenece a Sudamérica?",
        "resOne": "Colombia",
        "resTwo": "Panamá",
        "resThree": "Chile",
        "resFour": "Ecuador",
        "result": "Panamá"
    },
    {
        "question": "¿En qué fecha se declaró la independencia de Argentina?",
        "resOne": "25 de mayo de 1810",
        "resTwo": "20 de junio de 1820",
        "resThree": "9 de julio de 1816",
        "resFour": "17 de agosto 1850",
        "result": "9 de julio de 1816"
    }
]`

const finalRes = JSON.parse(preguntasYRespuestas);

const contador = document.getElementById('contador');
const question = document.getElementById('question');
const resOne = document.getElementById('resone');
const resTwo = document.getElementById('restwo');
const resThree = document.getElementById('resthree');
const resFour = document.getElementById('resfour');
const nextBtn = document.getElementById('nextBtn');

const result = `${finalRes.result}`

let counter = 0;
let counterTwo = 1;

const nextQuestion = ()=>{
    counter++;
    counterTwo++;
    question.innerHTML = `${finalRes[counter].question}`;
    resOne.innerHTML = `${finalRes[counter].resOne}`;
    resTwo.innerHTML = `${finalRes[counter].resTwo}`;
    resThree.innerHTML = `${finalRes[counter].resThree}`;
    resFour.innerHTML = `${finalRes[counter].resFour}`;
    contador.innerHTML = counterTwo+"/10";
}

const comparisonResult = ()=>{
    counter++;
    if (`${finalRes[counter].question}` === `${finalRes[counter].question}`){

    }
}

resOne.addEventListener("click", comparisonResult);
resTwo.addEventListener("click", comparisonResult);
resThree.addEventListener("click", comparisonResult);
resFour.addEventListener("click", comparisonResult);

nextBtn.addEventListener("click", nextQuestion);

console.log(finalRes[0].result);

