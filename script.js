let computerGuess;
let userGuess=[];
let userguessupdate= document.getElementById("textoutput");
let usernumberupdate = document.getElementById("inputbox")

const init = () =>{
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newgamebutton").style.display="none";
    document.getElementById("gamearea").style.display="none";

};
const startnewgame = () => {
    document.getElementById("newgamebutton").style.display="inline";
    usernumberupdate.setAttribute('disabled',true);
}
const newgamebegin = () =>{
    window.location.reload();
}

const compareguess = () =>{
       const userNumber = Number(document.getElementById("inputbox").value);
       userGuess = [...userGuess, userNumber];
       document.getElementById("Guesses").innerHTML= userGuess;
       
       if(userGuess.length < maxGuesses){
       if(userNumber > computerGuess){
        userguessupdate.innerHTML= "your guess is too high😋";
        usernumberupdate.value="";
       }
       else if(userNumber < computerGuess){
        userguessupdate.innerHTML= "your guess is too low😋"
        usernumberupdate.value="";
       }
       else{
        userguessupdate.innerHTML = "it is correct 😊"
        usernumberupdate.value="";
        startnewgame();
       }
    }
    else{
        if(userNumber > computerGuess){
            userguessupdate.innerHTML= `you loose !! correct number was ${computerGuess}`;
            usernumberupdate.value="";
            startnewgame();
           }
           else if(userNumber < computerGuess){
            userguessupdate.innerHTML= `you loose !! correct number was ${computerGuess}`;
            usernumberupdate.value="";
            startnewgame();
           }
           else{
            userguessupdate.innerHTML = "it is correct 😊"
            usernumberupdate.value="";
            startnewgame();
           }


    }
       document.getElementById('attempts').innerHTML= userGuess.length;
};
const startgame = () =>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gamearea").style.display="block";

}

const easyMode = () =>{
    maxGuesses = 10;
    startgame();

};

const hardMode = () =>{
    maxGuesses = 5;
    startgame();
};