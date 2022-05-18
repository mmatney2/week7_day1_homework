//comments
/*
multiline comments
*/

var firstName;
console.log(firstName)

var lastName="Bush"
console.log(lastName);
lastName="Clinton"
var someNumber = 41;
console.log(someNumber);

//float 
var someFloat = 3.14;
console.log(someFloat);

//boolean
var someBool = False;
console.log(someBool);

//Array
var someArray = [1,2,3]
console.log(someArray);

//Object Variable
var someObject = {'test':'Please test me!'}
console.log(someObject);

var someObject2 = {test: 'Please test me!'}
console.log(someObject2);

console.log(notHere);
var notHere = "Steve"
console.log(notHere);

testHoise();
function testHoist(){
    let blah="blah"
    console.log(blah);

};
testHoist();

//math 

//add
let sum = 5+5
console.log(sum);
sum  += 5;
console.log(sum);
sum++
console.log(sum);

//subtract
let diff = 5-5
console.log(diff)
diff -= 5
console.log(diff)

//multiply
let prod = 5*5;
console.log(prod);
prod *=5;
console.log(prod);

//divide
let divide = 5/5 //
console.log(divide)
console(typeof divide)
divide /=5 //.2
console.log(divide)
console(typeof divide)

//exp
let square = 5**2;
console.log(square) //25
square **=2
console.log(square) //625

//floor division
//in pythong did 5//2 = 2
let floor = Math.floor(5/2)
console.log(floor) //2

//ceiling
let ceil = Math.ceil(5/2)
console.log(ceil) //3

// check this out
let stuff = 3.14 + '4'
console.log(stuff)

// int() float() str() in python
let stuff2 = 3.14 + parseInt('4')
console.log(stuff2)

let stuff3 = 3.14.toString() + "4"
console.log(stuff3)

console.log(parseFloat('3.14')+2)
