


const rollDie = () => {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return "You rolled " + randomNumber;
}

outputs = {
    output1: rollDie(),
    output2: rollDie(),
    output3: rollDie(),
}

//window.globalVariable = JSON.stringify(outputs, null, 2);