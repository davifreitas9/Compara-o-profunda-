function deepEqual(a,b) {
	var valor1 = Object.getOwnPropertyNames(a);
    var valor2 = Object.getOwnPropertyNames(b);

    if (valor1.length != valor2.length) {
        return false;
    }
	if(valor1.length === 0)
        if(valor1 === valor2)
            return true;
        else
            return false;
	
	for(var i = 0; i < valor1.length; i++) {
        var resultado = valor1[i];
		if(valor1[resultado] !== valor2[resultado]){
            if(equals(valor1[resultado], valor2[resultado]))
                continue;
            else
                return false;
        }
    }
    return true;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));