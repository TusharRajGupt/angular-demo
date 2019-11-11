
const double = (a) => {
    return a * 2
}

outputs = {
    output1: double(10),
    output2: double(10),
    output3: double(10),
}

//const rollDie = () => {
//    let randomNumber = Math.floor((Math.random() * 6) + 1);
//    return "You rolled " + randomNumber;
//}
//
//outputs = {
//    output1: rollDie(),
//    output2: rollDie(),
//    output3: rollDie(),
//}

window.globalVariable = JSON.stringify(outputs, null, 2);