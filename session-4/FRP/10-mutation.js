let outputs;
let _old, _new;

_old = "abc"
_new = _old + "d"


//_old = [1,2,3]
//_new = _old.push(4);

//_old = [1,2,3]
//_new = _old
//_new.push(4)


outputs = {_old, _new}

window.globalVariable = JSON.stringify(outputs, null, 2);