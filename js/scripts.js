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
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
startButton.addEventListener ('click', function(){
    myContainer.innerHTML = ""
    if (easy.selected){
        const easyContainer = document.createElement('div')
        easyContainer.classList.add('easy-container');
        myContainer.append(easyContainer);
    for (let i = 0; i < 100; i++) {
        // const easyContainer = document.createElement('div')
        // easyContainer.classList.add('easy-game');
        
        const square = document.createElement('div');
        square.classList.add('cell', 'easy-game');
        square.innerHTML += i + 1;
        easyContainer.append(square);
        square.addEventListener('click', function(){
            square.classList.toggle('active');
            console.log(square.innerHTML)
        })        
    }
    }
    else if (medium.selected){
        const mediumContainer = document.createElement('div')
        mediumContainer.classList.add('medium-container');
        myContainer.append(mediumContainer);
        for (let i = 0; i < 81; i++) {
            const square = document.createElement('div');
            square.classList.add('cell', 'medium-game');
            square.innerHTML += i + 1;
            mediumContainer.append(square);
            square.addEventListener('click', function(){
                square.classList.toggle('active');
                console.log(square.innerHTML)
            })        
        }
    }
    else if (hard.selected) {
        const hardContainer = document.createElement('div')
        hardContainer.classList.add('hard-container');
        myContainer.append(hardContainer);

        for (let i = 0; i < 49; i++) {
            const square = document.createElement('div');
            square.classList.add('cell', 'hard-game');
            square.innerHTML += i + 1;
            hardContainer.append(square);
            square.addEventListener('click', function(){
                square.classList.toggle('active');
                console.log(square.innerHTML)
            })        
        }
    }
})