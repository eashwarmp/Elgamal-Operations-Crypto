// Second problem
const  { fetchInverse } =  require('./utils');
const ALPHABETCOUNT = 26;

function expmod( base, exp, mod ){
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
    }
    else {
      return (base * expmod( base, (exp - 1), mod)) % mod;
    }
  }

function reverseString(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}


function decodeElgamal(m) {
    let decodedVal = '';
    // console.log("Initial number is ---------> ", m)
    for(let i = 0; i< 3; i++) {
        let decryptAlpIndex = mod(m,ALPHABETCOUNT);
        // console.log('Decrypted Alphabet Index',decryptAlpIndex)
        let compiledAlphabet = String.fromCharCode(decryptAlpIndex + 97)
        // console.log("M value before floor ---------->", m)
        m = Math.floor(m/26);
        // console.log(`The final value of m ---------> `, m)
        compiledAlphabet = compiledAlphabet;
        decodedVal += compiledAlphabet;
    }
    return reverseString(decodedVal);
}


// To find the modulus of a number
function mod(n, m) {
    return ((n % m) + m) % m;
}

const p = 31847, alpha = 5, beta = 18074;
let a = 7899;

const fs = require('node:fs');
const readline = require('node:readline');

async function processElgamalLineByLine() {
    const fileStream = fs.createReadStream('elgamal.txt');
    let totalText = '';
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    
    for await (const line of rl) {
        let letters = line.split(" ");
        let c1 = letters[0];
        let c2 = letters[1];
        let s = expmod(c1,a,p);
        // console.log("The value of S ----------> ",s)
        let sInv = fetchInverse(s,p);
        // console.log('S inverse value is -------->',sInv)
        let m = mod(c2 * sInv, p);
        // console.log('M value is -------->',m)
        totalText += decodeElgamal(m);
        }
        console.log("Final Decrypted Text is ------->", totalText)
    }
    
    processElgamalLineByLine();