let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let newGameBtn2=document.querySelector("#new-btn2");
let msgContainer=document.querySelector(".msg-container");
let msgContainer2=document.querySelector(".msg-container2");
let msg=document.querySelector("#msg");
let msg2=document.querySelector("#msg2");
let turn0 =true;
let count=0;
let curMode="color1";
const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame =() =>{
    turn0= true;
    enableBoxes();
    if(count<9) {
        msgContainer.classList.add("hide");
    }
   else {
    msgContainer2.classList.add("hide");
   }
    count=0;
}; 
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else {
            box.innerText= "O";
            turn0=true;
        }
        if(curMode==="color1"){
            curMode="color2";
            box.classList.add("color2");
            box.classList.remove("color1");
        }
        else {
            curMode="color1";
            box.classList.add("color1");
            box.classList.remove("color2");
        }
         box.disabled= true;
         count++;
         checkWin();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const drawer=()=>{
    msg2.innerText=`Game is Draw`;
    msgContainer2.classList.remove("hide");
    disableBoxes();
}
const checkWin = ()=>{
    if(count===9) {
        drawer();
    }
    for(let pattern of winPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val ===pos3val) {
                console.log("Winner is",pos1val);
                showWinner(pos1val); 
            } 
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
newGameBtn2.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);