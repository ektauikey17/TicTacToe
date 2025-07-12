let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg")
let msg_container = document.querySelector(".msg-container")
let new_game = document.querySelector("#new-game")
let turn_0 = true

const win_patterns = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const resetGame = () =>{
    turn_0 = true
    msg_container.classList.add("hide")

    enabledBoxes()

}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}


const showWinner = (winner) =>{
    console.log(winner)
    // msg.innerText ="Congratulations, Winner is "+winner

    msg.innerText = `Congratulations, Winner is ${winner}`
    msg_container.classList.remove("hide")
    disabledBoxes()
}

const checkWinner = () =>{
    for(let pattern of win_patterns){
        // console.log(pattern)
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText)
        // console.log(boxes[pattern[1]].innerText)
        // console.log(boxes[pattern[2]].innerText)

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
                 if(val1 === val2   &&  val2 === val3){
                    console.log("Hurrayyyy!!! you WIN", val2)
                    showWinner(val2)
        }
        }
       

    }
}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button has been clicked")
        if(turn_0 === true){
                box.innerText = "0"
                turn_0 = false
        }
        else{
                box.innerText = "X"
                turn_0 = true
        }

        box.disabled = true
        checkWinner()
    })
})

reset.addEventListener("click", resetGame)
new_game.addEventListener("click",resetGame)


