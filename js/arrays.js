//Arrays

let grpONames=['Aydee', 'Ku', 'Ramika', 'Grady']

//index into
console.log(grpONames[2])

//Array destructuring
let aydee, ku, ramika, grady
[aydee, ku, ramika, grady] = grpONames
console.log(ku)

//looping over an array inline for each
console.log(
    grpONames.forEach((name_)=>console.log(name_))
    )

console.log(grpONames.toString())

// ', '.join(grpONames) in python
console.log(grpONames.join(', '))

//.slice()
// my_list[2:4 in python]
console.log(grpONames.slice(0,2))

//.splice() inserting... it can also remove
let new_grp = grpONames.splice(0,0, 'Scarlett')
console.log(new_grp)
console.log(grpONames)  //works in place of

// append
console.log(grpONames)
console.log(grpONames.push('Jalen'))
console.log(grpONames)

console.log(grpONames.pop)
console.log(grpONames)

console.log(grpONames.indexOf("Grady"))

testString="testMe"
testString[2] = 'G'
console.log(testString)

console.log(grpONames[-1]) //nope!

// .map()
let newGroup = grpONames.map((name)=>name[0])
console.log(newGroup)

let bigNameList=["Aydee", "Shoaha", "Armani", "Gareth", "Andy", "Ku", "Jalen", "Anthony"]

let aList = bigNameList.map((name) => name[0] == 'A' ? name : false)
console.log(aList) //replaces a names with false

let bigNameList2=["Aydee", "Shoaha", "Armani", "Gareth", "Andy", "Ku", "Jalen", "Anthony"]
let aNames=bigNameList2.map(
    (na)=>{
    if (na[0].toLowerCase()== 'a'){
        return na;
    }else{
        return false;
    }
    }
);
console.log(aNames)
//reduce
const nums = [2,4,6,8,10]
let numsSum=nums.reduce(
    (accumulator, currentNum)=> accumulator + currentNum
);
console.log(numsSum)

//filter 
let aNames2=bigNameList.filter(
    name=>name[0].toLowerCase()=='a'
);
console.log(aNames2)

//.shift (takes from the front)
shitedNum = nums.shift()
console.log(shitedNum)
console.log(nums)

//unshipft add to the front
nums.unshift(shitedNum)
console.log(nums)

console.log('1'==1) //true .. it is checking that the values are true not the datatype
console.log('2'===2) //false, checks if type and value are the same

