/*
    note made from the youtube channel code malayalam.
    refere https://youtu.be/5x4wdMGrRag
/*


//************** */
//THIS keyword
//************** */

//used for accessing context

// obj = {
//     a:10,
//     b:20,
//     fun: function(val){
//         console.log(this, val);
//     },
//     arrow:()=>{
//         console.log(this);
//     }

// }

// obj.fun('hello');          //printing obj. because obj is context of function
// obj.arrow();        //printing window. because arrow function has different context
// a = obj.fun;
// a('hei');                //printing window. context of a is window
// a.call(obj,'haha');        //setting the context as obj to the function a and call the function. this context setting is not permenent
// b = obj.fun.bind(obj);
// b('hmm');                //printing obj. the context of b is obj. because we are setting the context as obj in bind.

// c = obj.arrow.bind(obj);
// c();                    //arrow function will not change it's context

// class sample{
//     fun = function(){
//         console.log(this);
//     }
//     arrow = ()=>{
//         console.log(this);
//     }
// }

// obj1 = new sample();
// obj1.fun(); //context is class sample
// a1 = obj1.fun;
// a1();          //context is not defined in normal function
// a1.call(obj);  //now context is obj
// obj1.arrow(); //context of arrow function in class is also class
// b1 = obj1.arrow;
// b1();           //context of arrow function not changed. it is obj1

//******************************** */
//CALL BY VALUE AND CALL BY REFERENCE
//******************************** */

// function fun1(){
//     a=100;
//     b={value:400}
//     fun2(a,b);
//     console.log(a); /*call by value (value is not changing because
//          the int typ is stored in STACK and when passing to next 
//          function it will create new integer in stack. This new integer
//          is changing value. so it will not effect on prevous integer in stack)*/
//     console.log(b.value); /* call by reference(value is changing because objects and arrays are stored in HEAP. This heap memmory
//          reference is passed to STACK when passing to new function. so the memmory location is not changing)*/


// }

// function fun2(a,b){
//     a=a+1;
//     console.log(a);
//     b.value = b.value+1;
//     console.log(b.value);
// }
// fun1();

//********************** */
//CLOSURE
//********************** */


// function sumFunction(a,b){
//     return function closureFunction(){      //this function is called closure function. 
//         return a+b;
//     }
// }

// function sample(){
//     sum1 = sumFunction(10,12);  //it set the value inside the sumFunction function
//     console.log(sum1());
// }

// sample();

//************************* */
//SPREAD OPERATOR
//************************* */

// obj1 = {name:'favas',age:26}
// obj2 = obj1;
// obj2.age=20;            

// console.log(obj1.age);      //it uses reference of object. The reference of obj1 and obj2 are same.

// obj3 = {...obj1}        //spread operator (SHALLOW COPY)
// obj3.age=16;
// console.log(obj1.age);  //not changing the age. because obj3 has different reference in the HEAP

// a=[1,23,5];
// b=[6,7,8];
// c = [...a,...b];    //concantination
// console.log(c);

// function sum(a,b,c){
//     return (a+b+c);
// }

// console.log(sum(...b));     //function calling using spread

//************************** */
//OBJECT DESTRUCTING
//************************** */

// obj = {
//     name:'favas',
//     age:22,
//     city:'kolkata',
//     country:'india',
//     state:'karnataka',
//     zip:'560034'
// }

// obj2 = {
//     name:'neeraj',
//     age:22,
//     city:'kerala',
//     country:'india',
//     state:'kerala',
//     zip:'676345'
// }
// arr = [1,22,33,44,55,66,77,5,8,9];


// const {name,age,city,...others}=obj;  //destructed the variable in the obj. Now we can access them directly
//                                     //others variable is called rest. it will store other variables in the form of object

// const {name:name1,age:name2,city:name3} = obj2; //accessing same element objects

// const [a,b,,,d,...rest] = arr;


// console.log(name,age,city,others);
// console.log(name1,name2,name3);
// console.log(a,b,d,rest);


// function sample({name,city}){           //argument destructing
//     console.log('this is argument destructuring',name,city);
// }

// sample(obj);

//************************** */
// ARRAY FUNCTIONS
//************************** */

////forEach(), find(), filter(), map(), reduce()

// arr = [
//     {
//         name:'favas',
//         age:22,
//         city:'kolkata',
//     },
//     {
//         name:'neeraj',
//         age:22,
//         city:'Kerala',
//     },
//     {
//         name:'saleel',
//         age:23,
//         city:'tamil Nadu',
//     }
// ]


// arr.forEach(element => {        //itrating through each element of array
//     console.log(element);
// });

// //find
// val = arr.find((item)=>{              //returnig first element of array
//     return item.name ==='neeraj';
// })

// //find
// console.log('example of find',val);

// //filter
// val = arr.filter((item)=>{
//     return item.age == 22;
// })

// console.log('example of filter',val);

// //map
// val = arr.map((item)=>{             //return array to new array
//     return item.name;
// })

// console.log('example of map',val);

// //reduce
// ageSum = arr.reduce(                // reduce returns the final return value in the callback function
//     (total,item)=>{                 //total -> prevouse returned value
//         return total+item.age;      // item -> current array item
//     },
//     0                               //initial total value
// )
// console.log('example of reduce',ageSum);

//********************************* */
//IMPORT EXPORT
//********************************* */

// importing from script2

// import { count } from "./script2.js";
// import { count as itemCount } from "./script2.js";
// console.log(count([1,2,3,4,5,6]));
// console.log(itemCount([1,2,3,4,5,6,7,8,101010101]));


// import * as mod from "./script2.js";    //importing all 

// mod.printName('favas');
// mod.printAge(28);
// mod.printPlace('cherukunnu');

// import haha from "./lib.js";        //default export. it doesnot require same name

// haha();


// const btn =  document.createElement('button');
// btn.innerText = 'click Me'
// btn.onclick  = ()=>{
//     import('./dynamicImport.js').then((obj)=>{      //import only when the button clicked. this will help to avoid loading lot of data
//         obj.clicked();
//     });
// }
// document.body.appendChild(btn)



//************************* */
//OBJECT ORIENTED CONCEPT
//************************* */

// class StudentDetails {
//     name;
//     age;
//     place;
//     constructor(name, age, place) {
//         this.age = age;
//         this.name = name;
//         this.place = place;
//     }

//     printName() {
//         console.log(this.name);
//     }
//     printAge() {
//         console.log(this.age);
//     }
//     printPlace() {
//         console.log(this.place);
//     }

//     get getDetails(){
//         return 'name is '+this.name+', age is '+this.age+', Place is '+this.place+'\n';
//     }

//     set nameInitial(initial){           //setter function
//         this.name += ' '+initial;
//     }

//     static describe(...students){           //static function

//         var data = ''

//         students.forEach((student,index) => {
//             data += (index+1) + ' - name is '+student.name+', age is '+student.age+', Place is '+student.place+'\n';
//         }
//         )
//         console.log(data);
//     }
// }


// var student1 = new StudentDetails('favas',22,'othukkungal')
// var student2  = new StudentDetails('neeraj',22,'manjeri');
// var student3 = new StudentDetails('saleel',23,'perinthalmanna')


// student1.printName();

// StudentDetails.describe(student1,student2,student3);    //calling static function using class name. not object name
// student1.nameInitial = 'pothanooran'        //setter
// console.log(student1.getDetails);;          //getter 

/**********************
 INHERITANCE
 ***********************/

//  class Button {
//     constructor(name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }

//     onClick(fn){
//         this.button.onclick = fn;
//     } 
//  }


//  var bt = new Button('sample button');
//  console.log(bt);
//  bt.onClick (function ()
//     {
//         console.log('button has been clicked');
//     }
//  )

//  //suppose we want to add new feature to the button already created we don't need
//  //to create a entairly new button class. button we can inherit the all property of button
//  //and we can add new property to it

//  class greenButton extends Button{         
//     //button that turn into green when click
//     onClick(fn){
//         super.onClick(
//             function (){
//                 this.button.style.backgroundColor ='green';
//                 fn();
//             }.bind(this)
//         );

//     }


//  }

//  var greenbtn = new greenButton('green button');
//  greenbtn.onClick(
//     function(){
//         console.log('green button clicked');
//     }
//  )

/*******************************
 PROMISE CHAINING
 *******************************/

//  fetch('https://my-json-server.typicode.com/typicode/demo/comments/1')
//     .then((data)=>{
//         return data.json();             //json also return a promise. so this promise resolve value is passed to the next then
//     })
//     .then((data)=>{
//         console.log(data);
//     })

// function getJson(url) {
//     return fetch(url).then((data) => {
//         return data.json()
//     })
// }

////below chaining will execute the program sequancely.

// getJson('https://my-json-server.typicode.com/typicode/demo/comments/1').then((data)=>{
//     console.log(data);
//     return getJson('https://my-json-server.typicode.com/typicode/demo/comments/2');
// }).then((data)=>{
//     console.log(data);
//     return getJson('https://my-json-server.typicode.com/typicode/demo/comments/3');
// }).then((data)=>{
//     console.log(data);
// })

//CATCH to handle error
//if any erro happened in chain. then the below chain will not execute
// getJson('https://my-json-server.typicode.com/typicode/demo/comments/1').then((data)=>{
//     console.log(data);
//     return getJson('https://mdsfksdjfdshfm/typicode/demo/comments/2');
// }).then((data)=>{
//     console.log(data);
//     return getJson('https://my-json-server.typicode.com/typicode/demo/comments/3');
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('ERROR IS: ',err);
// })

//this will pass returned value to next chain
// getJson('https://my-json-server.typicode.com/typicode/demo/comments/1').then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data
// }).then((data)=>{
//     console.log(data);
// })

/*******************************
 * SKIPPED PROMISE AND TRY CATCHE. REFER https://youtu.be/5x4wdMGrRag
 *******************************/

/*******************************
 * SELF INVOKING FUNCTIONS
 *******************************/

//this function solves globel scope issues
//function can be called from where it is defined. is called self invoking functions

// (
//     function sample(name){
//         console.log(name);
//     }
// )('faheem')


/*******************************
 TEMPLATE LITERALS
 ******************************/

// //  multiline string
//  var multiString = `hello mohammed
//  how are you?
//  are you fine?`;
//  console.log(multiString);
//  //concantination

//  var age = 20;
//  let name ='mohammad';
//  console.log(`name is ${name}, age is ${age}`);

/**********************************
 DEFAULT PARAMETERS
 **********************************/

//  function sample(a=5,b=6,c=a+b){
//     console.log(`${a} + ${b} equals ${c}`);
//  }

//  sample()
//  sample(1,2);

/**********************************
 VAR , LET AND CONST
 **********************************/

// //hoisting
// //var variable declare at first
// //only declaration is taken as 
// //var has hoisting property, let has not hoisting property
// console.log(a);
// console.log(b);
// var a;
// var b='sample';

// //var allow multiple declaration, let donot
// //var is functional scope, let is block scope

// function sample(){
//     let a = 2;
//     var b=3;
//     if (true) {
//         let a=5;
//         var b = 6;
//     }
//     console.log(a);
//     console.log(b);
// }
// sample();

// //const has all the property let has and const can not redeclare and reassign values to it

/***********************
REGULAR EXPRESSION 
***********************/
//refer https://www.youtube.com/watch?v=03EFi-0gzDo&list=PLQzJEzrRmXOVPXv6gj5VvNvGh49qenrdt&index=29

// const regexObj = /cat/;
// const regexObj1 = /cat/i;                          //i- case sensitive, it is flag
// const regexObj2 = /[cb]at/i;                          //[] - special character check wheter the character inside square bracket is present in string
// const regexObj3 = /[a-z0-9]at/i;                          //- - mention range. any character from alphabet or 0 to 9
// const regexObj4 = /^cat/i;                          //- - start with cat
// const regexObj5 = /cat$/i;                          //- - end with cat
// const regexObj6 = /cat$/im;                          //- - end with cat in any line m - multiline
// const regexObj7 = /cats?$/im;                          // ? - prevouse character is optional
// const regexObj8 = /bitch(es)?$/im;                          // ()? - group of  character inside () is optional
// const regexObj9 = /bitchs*$/im;                          // * - if prevous character is not found or found greater than or equal to one return true 
// const regexObj10 = /bitchs+$/im;                          // * - if prevous character is found or found greater than or equal to one return true 
// const regexObj11 = /bitch.+$/im;                          // . - if any character is found or found greater than or equal to one return true 


// console.log(regexObj.test('i have cat'));       //true because string contain cat
// console.log(regexObj.test('i have bat'));       //false
// console.log(regexObj.test('i have Cat'));       //false
// console.log(regexObj1.test('i have Cat'));       //true
// console.log(regexObj2.test('i have cat'));       //true
// console.log(regexObj2.test('i have bat'));       //true
// console.log(regexObj3.test('i have zat'));       //true
// console.log(regexObj3.test('i have 0at'));       //true
// console.log(regexObj3.test('i have %at'));       //false
// console.log(regexObj4.test('i have cat'));       //false
// console.log(regexObj4.test('cat is fun'));       //true
// console.log(regexObj5.test('i have cat'));       //true
// console.log(regexObj5.test(
//     `i have cat
//     i have rat
//     i am fine
//     `));                                         //false

// console.log(regexObj6.test(
//     `i have cat
//     i have rat
//     i am fine
//     `));                                         //true

// console.log(regexObj7.test('i have cat'));       //true
// console.log(regexObj7.test('i have cats'));       //true
// console.log(regexObj8.test('i have bitches'));       //true
// console.log(regexObj8.test('i have bitch'));       //true
// console.log(regexObj9.test('i have bitchs'));       //true
// console.log(regexObj9.test('i have bitch'));       //true
// console.log(regexObj9.test('i have bitchssssssssss'));       //true
// console.log(regexObj10.test('i have bitch'));       //false
// console.log(regexObj10.test('i have bitchs'));       //true
// console.log(regexObj10.test('i have bitchssssss'));       //true
// console.log(regexObj11.test('i have bitchxcx'));       //true

// function validate(arg){
//     const err = check(arg.value);
//     document.getElementById('errText').innerHTML = err;
// }

// function check(string){
//     //start with alphabet
//     //only contain alphabet and numeric and underscore
//     const regexObj = /^[a-z][a-z0-9_]*$/i;
//     if(regexObj.test(string)){
//         return ''
//     }else{
//         return 'Not valid'
//     }

// }



/*******************************************************
 EQUALITY, MUTABLE, IMMUTABLE,PRIMITIVESN NON-PRIMITIVES
 *******************************************************/

//  //primitives:- number, string, char,boolean,etc... 
//  //non-primitives:- object, array


//  //comparing in primitives

//  var a = 2;
//  var b = 2;
//  console.log(a===b);    //true, because primitives are comparing using values

//  //comparing in non-primitives
//  var a={name:'favas'}
//  var b ={name:'favas'}

//  console.log(a===b);    //false, because non-primitives are comparing using references

//  //immutable:- the value in a reference can not change. if the value change, its reference also change. this is in the case of primitive variables only

//  var a= 11;
//  var b= a;  //b is storing a's reference

//  var b= b+1;    //try to change value in reference of a, but value can not change, so new value is created in new reference
//  console.log('a=',a);
//  console.log('b=',b);   //printing 11,12

//  //mutable:- value can be change. this is in the case of non-primitive variables only

//  var a = {name:'favas'}
//  var b = a      //b is storing reference of a
//  b.name = 'faheem'  //only changes the value. not the reference. the reference of b is reference of a. so the changes made to b will change the values in a

//  console.log('a=',a);
//  console.log('b=',b);   //printing faheem,faheem


//  var a = {name:'favas'}
//  var b = {...a}      // a new reference is created with new value through spread operator
//  b.name = 'faheem';

//  console.log('a=',a);
//  console.log('b=',b);   //printing favas,faheem

//  //const :- reference can not change, but value can change, that is why new const variable with same name can not be created

/**************************
 SHALLOW COPYING,
***************************/

//shallow Copy:- when we copy two object using spread operator, its only changes the object's reference. not changing the children object's reference

// const obj= {
//     name:'favas',
//     age:23,
//     address:{
//         houseName:'pothanooran',
//         postOffice:'othukkungal',
//         permenentAddress:{
//             houseName:'sample',
//             postOffice:'sample'
//         }
//     }
// }

// var obj2 = {...obj};
// console.log(obj2===obj);        //false, because shallow copy only changes the reference of parent obj
// console.log(obj2.address===obj.address) //true, because shallow copy donot change the reference of children obj

// //issue with this copy
// obj2.address.houseName='pothanooran house'
// console.log(obj2.address===obj.address) //true,
// console.log(obj.address.houseName);     //we are meant to change only the address in obj2. but obj object addres variable also changed. this cause a big issue in advance programming

// //to solve this, we must do shallow copy in two stage
// var obj3 = {
//     ...obj,
//     address:{
//         ...obj.address
//     }
// }
// obj3.address.houseName='pothanooran hahaha'

// console.log(obj.address===obj3.address) //false, because the referece of address has been changed using shallow copying in two stage
// console.log(obj.address.houseName);
// console.log(obj3.address.houseName);

// console.log(obj3.address.permenentAddress===obj.address.permenentAddress);  //true, that means referece of this child donot changed. this is the property of shallow copy
// // there is a library in react called immer. this library do the sallow copy in very simple.

/*********************
 DEEP COPY
 *********************/

//deep copy: - it copying all the object and child object to a new reference
// this consume time and memory, but it is very simple to perform

const obj = {
    name: 'favas',
    age: 23,
    address: {
        houseName: 'pothanooran',
        postOffice: 'othukkungal',
        permenentAddress: {
            houseName: 'sample',
            postOffice: 'sample'
        }
    }
}

var obj2 = JSON.parse(JSON.stringify(obj));

console.log(obj2===obj);   //false
console.log(obj2.address===obj.address);   //false
console.log(obj2.address.permenentAddress===obj.address.permenentAddress);   //false