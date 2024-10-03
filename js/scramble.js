// const values
const field = document.getElementById("field");
const gen = document.getElementById("gen");

const possibleScrambles = ["L", "R", "U", "D", "B", "F", "L2", "R2", "U2", "D2", "B2", "F2","L'", "R'", "U'", "D'", "B'", "F'"];

// functions
function generate(){
    let scramble = "";
    let newScramble = "";
    let oldScramble = "";

    let checked = 0;

    while(checked < 20){
        let randomNum = Math.floor(Math.random() * possibleScrambles.length);
        newScramble = possibleScrambles[randomNum];

        if (oldScramble[0] !== newScramble[0]){
            checked += 1;
            console.log(checked)
            scramble = `${scramble} ${newScramble}`
        }

        oldScramble = newScramble;
    }

    return scramble;
}

gen.onclick = () => {
    let scramble = generate();
    field.innerHTML = scramble;
}