// Aim is to find the solutions for the elliptical equation: y2=x3+x+6
// (x,y)
//Z(1039)

const { addElgamal, doubleElgamal, fetchInverse } = require("./utils");

const X_TEST = 1039;
const Y_TEST = 291;
const Z = 1039;

// To find the modulus of a number
function mod(n, m) {
    return ((n % m) + m) % m;
}

function equationEquality(i,j) { // Returns a boolean
    let lhs = mod(i*i,Z);   // power of y and 2
    let rhs = mod(j*j*j + j + 6,Z); // power(x,3) + x + 6
    let bool  = lhs === rhs ? true : false;
    return bool;
}

let count = 0;
let bool = false;
let lexLargPointX = 0;
let lexLargPointY = 0;

function EvaluvateEllipticalEq(Z) {

for(let i=0; i < Z; i++) {
    for (let j=0; j<Z; j++) {
        let equality = equationEquality(i,j)
        if (equality) {
            count++;
            lexLargPointX = j
            lexLargPointY = i
        }
    }
}

//First question
// Doing count + 1 since we should also take O into account
console.log(`The points over E are -------> ${++count}`)
//Second question
console.log(`The lexical points are (${lexLargPointX},${lexLargPointY})`)
}
EvaluvateEllipticalEq(Z);

//Third question
// To verify if points (1014, 291) belong to E
let eqBoolean = equationEquality(X_TEST, Y_TEST)
console.log(`The points (${X_TEST},${Y_TEST}) ${eqBoolean ? "do" : "do not"} belong to E`)


function EllipticalEncrypt(x1,x2) {
// Encrypting it now
    y11 = mod(k * alph1,Z)
    y12 = mod(k * alph2, Z)
    y21 = mod(x1 + (k*bet1),Z)
    y22 = mod(x2 + (k*bet2),Z)
    console.log(`The Cipher text values are: (${y11},${y12}),(${y21},${y22})`)
}

//Fourth question
var alph1 = 799, alph2 = 790
let bet1 = 385, bet2 = 749 
k = 100; // Random key as given in question
EllipticalEncrypt(575,419) // Plain text values (575,419)

//Fifth Question
var alph1 = 818, alph2 = 121
let s1 = 199, s2 = 72
let r1=815, r2 = 519
// From the equation: y2=x3+x+6, we can get the values of a and b
let a = 1, b = 6;
// We can calculate the values Ka, Kb from the generator values alpha 1 and alpha 2, Ka  = a * alpha; Kb = b * alpha 

// Calculating the values of ka1,ka2
let ka1 = a * alph1;
let ka2 = a * alph2;
console.log(`Values of Keys Ka1 : ${ka1} and Ka2 : ${ka2}`);

// Calculating the values of kb1,kb2
// kb1,kb2 = 6 alpha
let TwoAlpha = doubleElgamal(alph1,alph2,a,b,Z)
let FourAlpha = doubleElgamal(TwoAlpha[0], TwoAlpha[1], a, b , Z )
let FiveAlpha = addElgamal(FourAlpha[0],FourAlpha[1],alph1,alph2,Z)
let SixAlpha = addElgamal(FiveAlpha[0],FiveAlpha[1],alph1,alph2,Z)

// Calculating the value of shared secret, kc = a * kb
console.log("The shared secret values are",SixAlpha)


// To find the secret values
// let k1 = Math.floor(s1*r1/alph1)
// let k2 = Math.floor(s2*r2/alph2)
// console.log(`Secret Keys are (${k1},${k2})`)


fetchInverse(-70269649,14351);


