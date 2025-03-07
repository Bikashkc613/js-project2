let score={
    won:0,
    loss:0,
    tie:0,
}

let userMove="";
let result="";
let computerMove="";
addRules();
addFirstContainer();
loadFromLocalStorage();



function addRules(){
let srules=document.querySelector(`.rules`);
srules.innerHTML=`
<div class="rbat">
    <h3 class="rbat-heading">Bat</h3>
    <p>bat won ball</p>
    <p>bat lose with stump</p>
</div>

<div class="rball">
    <h3>Ball</h3>
    <p>ball won stump</p>
    <p>ball lose with bat</p>
</div>


<div class="rstump">
    <h3>Stump</h3>
    <p>stump won bat</p>
    <p>stump lose with ball</p>
</div>
`;
}

function addFirstContainer(){
let sfirst=document.querySelector(`.container-first`);

sfirst.innerHTML=`
<div class="bat">
            <button class="bbat" onclick="batClick()">
                <img src="OIP.jpg" alt="">
            </button>
        </div>

        <div class="ball">
            <button class="bball" onclick="ballClick()">
                <img src="OIP (1).jpg" alt="">
            </button>
        </div>

        <div class="stump">
            <button class="bstump"  onclick="stumpClick()">
                <img src="th.jpg" alt="">
            </button>
        </div>
`;
}



function batClick(){
    userMove="bat";
    moveOfTheComputer();


    
    if(computerMove=="bat"){
       
        score.tie++;
        result="The game is tie";
    }

    else if(computerMove=="ball"){
       
        score.won++;
        result="you won the game";
    }

    else{
        
        score.loss++;
        result="you lose the game";
    }

    saveToLocalStorage();
    addSecondContainer();

    



}


function ballClick(){
 
   userMove="ball";
   moveOfTheComputer();

    if(computerMove=="bat"){
        score.loss++;
        result="you lose the game";

    }

    else if(computerMove=="ball"){
        
        score.tie++;
        result="the game is tie";
    }

    else{
        score.won++;
        result="you won the game";
    }
    saveToLocalStorage();
    addSecondContainer();
}



function stumpClick(){
    userMove="stump";



    moveOfTheComputer();
   


    if(computerMove=="bat"){
        
        score.won++;
        result="you won the game";
    }


    else if(computerMove=="ball"){
        
        score.loss++;
        result="you lose the game";
    }

    else{
        
        score.tie++;
        result="The game is tie";
    }
    saveToLocalStorage();
    addSecondContainer();
}



function saveToLocalStorage(){
    localStorage.setItem(`gameInfo`,JSON.stringify(score));
}




function loadFromLocalStorage(){
    let lscore=localStorage.getItem(`gameInfo`);
    if(lscore){
        score=JSON.parse(lscore);
    }
    
    addSecondContainer();
}






function moveOfTheComputer(){

    let random=Math.random()*3;
    

        if(random>=0 && random<1){
        

        computerMove="bat";
        
    }

    else if(random>=1 && random<2){
       
        
        computerMove="ball";
       
    }

    else{
        
        
        computerMove="stump";
        
    }
    return computerMove;
}



function addSecondContainer(){
    let ssecond=document.querySelector(".container-second");
    ssecond.innerHTML=`
    <div>your choice is ${userMove}</div>
        <div>computer choice is ${computerMove}</div>
        <div>${result}</div>
        <div>No of won: ${score.won}</div>
        <div>No of loss: ${score.loss}</div>
        <div>No of tie: ${score.tie}</div>
        <div>
            <button onclick="reset()">reset score</button>
        </div>
    `;
}


function reset(){
    localStorage.removeItem(`gameInfo`);
    score={
        won:0,
        loss:0,
        tie:0,
    }
    userMove="";
    computerMove="";
    addSecondContainer();
}