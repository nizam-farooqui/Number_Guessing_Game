// generate the random number then the guess the number we have only 10 chance for guessing and we also stored  previous guess number and also show how much guesses remaining 

let randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')//.value
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuess=[]
let numGuesses=1
let playGames=true;
//you are avialabe or not
if(playGames){
  submit.addEventListener('click',function(e){
   e.preventDefault()
   const guess=parseInt(userInput.value)
   console.log(guess)
   validateGuess(guess)
  })
}


// value is valid or not and between 1 to 100
function validateGuess(guess){
if(isNaN(guess)){
  alert('Please Enter The valid Number')
}
else if(guess<1){
  alert('Please Enter A Number Greater than 1')
}
else if(guess>100){
  alert('Please Enter Number Less than 100 ')
}
else{
  prevGuess.push(guess)
  //if last attempt

  if(numGuesses===11){
    displayGuess(guess)
    displayMessage(`Game Over , Random Number was: ${randomNumber}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}

}

let smileEmoji = "\u263A";
// check value = random number or not if value = random use displayMessage method show "you are win" also show if  value is low show "value is low" if value is high show "value is high"
function checkGuess(guess){
//
if(guess===randomNumber){
  displayMessage(`Hurrey!!!!! You Guess right ${smileEmoji}`)
  endGame()
}
else if(guess<randomNumber){
  displayMessage("your number is small")
  
}
else{
  displayMessage(`your number is large`)
}
}

// clean the values bcz we take the next value also and also update previous guess and decrease the guesses remaining 
function displayGuess(guess){// cleanup guesses
//
userInput.value=''
guessSlot.innerHTML+=`${guess}   `
numGuesses++
remaining.innerHTML=`${11-numGuesses}`

}

//interact with dom 
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGames=false
  newGame()
}


function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
 randomNumber= parseInt(Math.random()*100+1)
 prevGuess=[]
 numGuesses=1
 guessSlot.innerHTML=''
 remaining.innerHTML=`${11-numGuesses}`
 userInput.removeAttribute('disabled')
startOver.removeChild(p)


 playGames=true
})
}


