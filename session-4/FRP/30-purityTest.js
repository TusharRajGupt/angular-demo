let factor = 60;

const hourToMinute = (hr) => {
    return hr*factor + ' minutes'
}

outputs = {
    output1: hourToMinute(3),
    output2: hourToMinute(3),
    output3: hourToMinute(3),
}


//window.globalVariable = JSON.stringify(outputs, null, 2);