let factor = 80;

const dollarToINR = (hr) => {
    return hr*factor + ' rupees'
}

outputs = {
    output1: dollarToINR(3),
    output2: dollarToINR(3),
    output3: dollarToINR(3),
}


window.globalVariable = JSON.stringify(outputs, null, 2);