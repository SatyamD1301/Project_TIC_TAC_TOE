let butns=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO= true;//to track the turn of player

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame=()=>{
    turnO=true;
    enable();
    msgContainer.classList.add("hide");
}
   
butns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(turnO){
        btn.innerText="O"
        turnO=false;
       }else{
        btn.innerText="X"
        turnO=true;

       }
       btn.disabled=true

       checkWinner();
    })
});
const disable=()=>{
    for(let btn of butns){
        btn.disabled=true
    }
}
const enable=()=>{
    for(let btn of butns){
        btn.disabled=false
        btn.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
       
        let pos1Val=butns[pattern[0]].innerText;
        let pos2Val=butns[pattern[1]].innerText;
        let pos3Val=butns[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= ""&&pos3Val!= ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){

                showWinner(pos1Val);
            }
        }

    }
}

newGameBtn.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);
