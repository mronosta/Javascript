// document.write('my second java script');
// windows.alert('my first java')
// document.getElementById('demo').innerHTML='This is the new content of demo';
var fname = 'Sade';
age=39;
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

const person = {
    first_name: 'Daniel',
    age: 60,
    class: 'SS1',
    dob: 1960,
    current_year: 2022,

    current_age : function(){
        return `this man is aged ${this.current_year - this.dob}`
    },
    description: function (){
        return `${this.first_name} is a man aged ${this.age} and he is in ${this.class}`;
    },
    ageCalc:function(){
        return `My present age is ${this.current_year - this.dob}`
    }

}

// Document.write(person.first_name + '' + person.age);

// document.write(person.description());
// document.write(person.ageCalc());

// const myfirstfunction = function caLcAge(p, fname){
//   document.write(`My first ${p} and my name is ${fname}`);
// }

// const my firstfunction = (p,fname)=>{
//     document.write(`My age is ${p} and my name is ${fname}`);
// }

function calculator(a,b){
    document.write(a+b);
}
calculator(4,8);






