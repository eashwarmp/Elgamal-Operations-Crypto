
function doubleElgamal(x,y, a, b,Z) { 
    // Where x & y are the (x,y) values; 
    //a & b are the coefficients that are found in equation; 
    //Z is the point over E
    var i = mod(((3 * x * x) + a),Z)
    var bOne = mod(2*y,Z)
    var bTwo = Z < 2*y ? eucInv(Z, bOne, 0 , 1) : eucInv(bOne, Z, 0 , 1);
    var bFinal = mod(bTwo,Z)
    var s = mod(i * bFinal,Z) // If P = Q
    var xR  = mod((s * s - 2 * x),Z)
    var yR = mod((s * (x-xR) - y),Z)
    // console.log(`The value of xr: ${xR} and the value of yr: ${yR}`)
    return [xR,yR]
}

function addElgamal(x1,y1,x2,y2,Z) {
    var a = mod(y1-y2,Z);
    // var o = fetchInverse(mod(x1-x2,Z),Z)
    var oOne = mod(y1-y2,Z)
    var oTwo = Z < y1-y2 ? eucInv(Z, oOne, 0 , 1) : eucInv(oOne, Z, 0 , 1);
    var OFinal = mod(oTwo,Z)
    var s = mod(a * OFinal,Z)
    var xR  = mod((s * s - x1 - x2),Z)
    var yR = mod((s * (x1-xR) - y1),Z)
    // console.log(`The value of xr: ${xR} and the value of yr: ${yR}`)
    return [xR,yR]
}

function eucInv(a, b, t1, t2 ){
    if(b==0)
        return t1;
    else
        return eucInv(b,mod(a,b), t2,(t1 - (t2 * Math.floor(a/b))));
}

function fetchInverse(val, modVal) {
    var multInv;
    for(var i= 0; i< modVal; i++) {
        if (val*i%modVal === 1) {
            console.log(`The multiplicative inverse is ${i}`)
            multInv = i;
        }
    }
    return multInv;
}


// To find the modulus of a number
function mod(n, m) {
    return ((n % m) + m) % m;
}

console.log('Check the answer ---> ',eucInv(14351,-70269649,0,1))

module.exports =  {fetchInverse, addElgamal, doubleElgamal}