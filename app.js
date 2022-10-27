// document.write('my second java script');
// windows.alert('my first java')
// document.getElementById('demo').innerHTML='This is the new content of demo';
var fname = 'Sade';
age = 39;
date_of_birth = 1923;
total = age + date_of_birth;


// document.getElementById('demo').innerHTML = `Dear ${fname} wishing you a happy new monthy ${total}`;

// aritmetic operators
// let x = 10, y = 25 ;
// console.log(x+=y);

// let date = new Date ();
// let hour = date.getHours();



// if(hour > 0.00 && hour < 11.59){
//     document.write('Good Morning to You')
// }
// else if( hour >= 12.00 && hour  <= 15.30){
//     document.write('good Afternoon to you')

// }
// else if (hour >= 15.00 && hour <=19){
//     document.write('good Evening to you')
// }

// else if {
//     document.write ('good Night')
// }

// console.log(hour);

// const person = {
//     first_name: 'Daniel',
//     age: 60,
//     class: 'SS1',
//     dob: 1960,
//     current_year: 2022,

//     current_age : function(){
//         return `this man is aged ${this.current_year - this.dob}`
//     },
//     description: function (){
//         return `${this.first_name} is a man aged ${this.age} and he is in ${this.class}`;
//     },
//     ageCalc:function(){
//         return `My present age is ${this.current_year - this.dob}`
//     }

// }

// // Document.write(person.first_name + '' + person.age);

// // document.write(person.description());
// // document.write(person.ageCalc());

// // const myfirstfunction = function caLcAge(p, fname){
// //   document.write(`My first ${p} and my name is ${fname}`);
// // }

// // const my firstfunction = (p,fname)=>{
// //     document.write(`My age is ${p} and my name is ${fname}`);
// // }

// // function calculator(a,b){
// //     document.write(a+b);
// // }
// // calculator(4,8);

// // const man = (a,b) =>  a+b;

// // document.write(man(6,5))


// // const man ;


// // const calculator = (a,b) => a+b;

// // document.write(calculator(8,2));

// const students = ['star','Freda', 'Napoleon'];

// document.write(students[0])
// const studentsInfo = [
//     {
//         name:'star',
//         hobby:'Not coming to class'
//     },
//     {
//         name:'Freda',
//         hobby:'Disturbing in class'
//     },
//     {
//         name: 'Napoleon',
//         hobby: 'craking dry jokes'
//     },
// ]

// document.write('<br>' + studentsInfo[2].hobby);


// let sentence="";
// for(let i = 10 ; i <= 100; i+=10){
//     sentence+= `<br>there are ${i} in class today <br>`;
// }

// document.write(sentence);


// Document.write(sentence);
// const StudenIfo = [
//     {
//         name:'Tega',
//         salary:20000,
//         active: true,
//     },
//     {
//         name:'Freda',
//         salary:50000,
//         active: true,
//     },
//     {
//         name:'Evans',
//         salary:50000,
//         active: false,
//     },
//     {
//         name:'Ovie',
//         salary:80000,
//         active: True,
//     },
//     {
//         name:'Chinelu',
//         salary:7000,
//         active: false,
//     }
// ]
// for (let info of StudentIfo){
//     if(info.active === false){continue;}
//     document.write(`<br>prepare  Mr/Mrs ${info.name} salary with the amount ${info.salary}<br>`)

// };

// let text1 = 'fgfgfgfgfggfdfssdgdggddgddgfddd';
// console.log(text.length);

let text2 = "Mr Daniel is a facilitator at ict hub";
let newtext2 = text2.replace("Daniel", "Tega");

let newtext3 = newtext2.replace("facilitator", "student");


document.write(newtext3);




const people = ['david', 'Daniel', 'Elisha'];
people.unshift('Ethan')
const humans = ['ella', 'bella', 'shiela']
const result = [56,53,77,2023, 20, 100, 120,50, 55,]


// result.forEach(
//     (value, index) => { 
//         if(value%2 == 0) return console.log (`this ${value} is even`)

//         console.log(`this is ${value} is odd`)
//  }
// );


// let mappedResult = result .map(

//         (value, index) => { 
//             if(value%2 == 0) return  (`this ${value} is even<br>`);
    
//             console.log(`this is ${value} is odd<br>`)
//      }
//     )
//     document.write(mappedResult.join('<br>'));

    const nameOfNoiseMakers = ['Precious','Precious Sister','Chinelo','Nthan','Freda','Nappy']
    const consistentNoiseMakers = nameOfNoiseMakers.filter(
        (value,index,array) => {
            if(value == 'precious') return value
        }
    )
    document.write(consistentNoiseMakers) 
    

















































