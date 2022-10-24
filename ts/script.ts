let player1 = 3;
console.log(player1)

let player2 = 90;
console.log(player2)

let number = (Math.random()* (100-1)+1);
//console.log(number);
console.log(Math.floor(number));

function verify(){
    let diff1 = Math.abs(number - player1);
    let diff2 = Math.abs(number - player2);

    if (player1 === number) {
       console.log("Player 1 win")
    } else if (player1 === number){
        console.log("Player 2 win")
    } else if (diff1 < diff2 ) {
        console.log("Player 1 si avvicina di più")
    } else if (diff1 > diff2 ) {
        console.log("Player 2 si avvicina di più")
    } else if (diff1 = diff2) {
        console.log("Pareggio")
    }

}


console.log(verify());

