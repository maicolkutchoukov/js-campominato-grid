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
startButton.addEventListener ('click', function(){
    
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        square.innerHTML += i + 1;
        myContainer.append(square);
        square.addEventListener('click', function(){
            square.classList.toggle('active');
            console.log(square.innerHTML)
        })        
    }
})