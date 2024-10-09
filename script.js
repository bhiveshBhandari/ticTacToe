let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
    }
}
const disableBtn = () => {
    for(let boxd of boxes){
        boxd.disabled = true;
    }
}

restBtn.addEventListener("click",()=>{
    boxes.forEach((boxe)=>{
        boxe.innerText = "";
        turnO=true;
        boxe.disabled = false;
        console.log("click");
        msgContainer.classList.add("hide");
    })
})

const showWinner = (winner)=>{
    msg.innerText = "Congratulations! Winner is " +winner;
    msgContainer.classList.remove("hide");
    disableBtn();
}