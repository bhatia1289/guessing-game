const ranNum = Math.floor(Math.random()*100+1);
const inp = document.querySelector("input");
let check_btn = document.getElementById("check_btn");
let count = 0;
let atms = document.getElementById("attempts");

check_btn.addEventListener("click",()=>{
    const guess = parseInt(inp.value);
    if(isNaN(guess)|| guess <1 || guess >100){
        res.textContent ="Please enter a valid number!";
    }else{
        checkResult(guess);
    }
});

let res = document.getElementById("res_out");

function checkResult(guess){
    while(true){
        if(guess==ranNum){
            res.textContent ="You Won!!";
            break;
        }else if(guess< ranNum){
            count++;
            res.textContent="Too low!! Try Again";
            atms.textContent=`Attempts : ${count}`;
            break;
        }else if(guess>ranNum){
            count++;
            res.textContent="Too high!! Try Again";
            atms.textContent=`Attempts : ${count}`;
            break;
        }
    }
}