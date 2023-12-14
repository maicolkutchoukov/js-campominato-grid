/*

    Consegna
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella : 
    -- la cella cliccata si colora di azzurro 
    -- emetto un messaggio in console con il numero della cella cliccata.

*/


const myContainer = document.querySelector('.my-container');
const startButton = document.querySelector('button');
const mySelect = document.querySelector('select');
startButton.addEventListener ('click', function(){
    myContainer.innerHTML = "";
    const difficult = parseInt(mySelect.value);
    console.log(difficult);
    for (let i = 0; i < difficult; i++) {        
        const square = document.createElement('div');
        square.classList.add('cell', 'cell-' + difficult);
        square.innerHTML += i + 1;
        myContainer.append(square);
        square.addEventListener('click', function(){
            square.classList.add('active');
            console.log(square.innerHTML)
        })        
    }    
})

