var websites= [
    'w3schools',
    'stackoverflow',
    'mdn',
    'freecodecamp',
    'udemy'
];


for (let index in websites) {
    console.log(index)
  
}

console.log(`.......`)

for (let arrIndex of websites){
    console.log(arrIndex)

}

let num = 0;

while (num <= 1000) {
    
    let rem = num % 2;

    if(rem == 0 ) {

        console.log(`${ num } is an even number`)

    } else{
        console.log(`${ num } is an odd number`)
    }

    num++;
}


let existingRef = "abcdef";
let newRef = "";

function generateReference(max) {
    return Math.floor(Math.random() * max) + 1;
}

do {
    newRef = generatereference(10)
    console.log(`the reference is ${newRef}`)

} while (newRef == existingRef)

console.log('our new transaction reference is: ' + newRef);

var transaction = {
    reference: newRef,
    amount: 5000,
    account_number: 334423454546543,
    bank_name: 'Zenith'
}

console.log


