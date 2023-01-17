let clickTarget = 0;
const gameContainer = document.getElementById("game");
const allDivs = document.getElementsByClassName('box');


let colors = ["blue", "red", "green", "purple", "yellow", "orange", "orchid", "grey", "cyan", "cornflowerblue",
"blue", "red", "green", "purple", "yellow","orange", "orchid", "grey", "cyan", "cornflowerblue" ];

// function toggleBlack (){
//     const allDivs = document.getElementsByClassName('box');
//     for (let single of allDivs){
//         single.classList.toggle(cl);
//     }
// }

function shuffle(array){
let counter = array.length;
while(counter > 0){
let index = Math.floor(Math.random() * counter)
counter--
 let temp = array[counter];
 array[counter] = array[index];
 array[index] = temp;
}
 return array
}

let shuffleColors = shuffle(colors)
//all boxes should begin black


function createDivs(colorsArray){
for (let cl of colorsArray){
    let newDiv = document.createElement('div');
    newDiv.classList.add("box");
    newDiv.classList.add("black");
    newDiv.addEventListener("click", function(evt){
        evt.preventDefault();
        evt.target.classList.replace("black", cl);
       clickTarget ++;
    if(clickTarget === 2){
        setTimeout(() => {
            for (let single of allDivs){
                single.classList.toggle(cl);
            }
        }, 1000);
    }
    })
    gameContainer.append(newDiv);
}
}
createDivs(shuffleColors)
