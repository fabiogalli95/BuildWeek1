const risposteGiuste = document.getElementById('risposteGiuste');
const risposteSbagliate = document.getElementById('risposteSbagliate');
let numRisposteGiuste = localStorage.getItem('rispostaGiusta');
let numRisposteSbagliate = 10 - numRisposteGiuste;
 risposteGiuste.innerHTML = `<b>${numRisposteGiuste}0%</b>`;
 risposteSbagliate.innerHTML = `<b>${numRisposteSbagliate}0%</b>`;

let questionGiuste = document.getElementById('questionsGiuste')
let questionSbagliate = document.getElementById('questionsSbagliate')

const cerchioTesto = document.getElementById('cerchio')

questionGiuste.innerHTML=`${numRisposteGiuste}/10 questions`
questionSbagliate.innerHTML=`${numRisposteSbagliate}/10 questions`


const scrittaCerchioTesto = () => {
    if (parseInt(numRisposteGiuste)>=6) {
        cerchioTesto.innerHTML=`<p>Congratulations! <span class='celestino'>You passed the exam.</span></p> We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)`
    }

    else {
        cerchioTesto.innerHTML = `<p>We're sorry! <br> <span class='violetto'>You failed the exam.</span></p> Don't worry! You can try again and get your certificate!`
    }
}

scrittaCerchioTesto();