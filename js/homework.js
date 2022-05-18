//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let text = "How are you doing today?";
// const myArray = text.split(" ");
let dog_string = "Hello Max Max, my name is Dog, and I have purple eyes!"
// const myArray = dog_string.split(" ");
// console.log(myArray)
//#1
let dog_names = ["Max","HAS","PuRple","dog"]

function listNumsString(){
    const myArray = dog_string.split(" ");

    for(let i = 0; i <myArray.length; i++){
        if (dog_names.includes(myArray[i])){
            console.log("Matched dog_name")
        }
    } 
}
listNumsString()


//#2
function listNums(){
    let myArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for(let i = 0; i <myArr.length; i+=2){
        myArr.splice(i,1, 'even index')
        // console.log('i is:', i)
        
    }
    console.log(myArr)
    } 

listNums()

//#3

// def find_smallest_int(arr):
//     arr.sort()
//     return arr[0]
// a= [2,1,3]
// print(find_smallest_int(a))
function find_smallest_int(){
    let arr = [2,6,2,9]
    arr.sort()
    console.log(arr[0])
}
find_smallest_int()

//#4
// def positive_sum(arr):
//     new_list = []
//     for num in arr:
//         if num > 0:
//             new_list.append(num)
            
//         elif num < 0:
//             num == 0
//         elif num == 0:
//             new_list.append(num)
//         else:
//             return 0
//     return sum(new_list)

// arr = [1, -4, 8, -5, 0]

// print(positive_sum(arr))

function positive_sum(arr){
    let new_list = []
    arr = [1, -4, 8, -5, 0]
    for(let i = 0; i <arr.length; i++){
        if (i>0){
            new_list.push(i)
        }
        else if(i<0){
            return i == 0
        }
        else if(i==0){
            new_list.push(i)
        }else{
            return 0
    }
}
console.log(new_list)
}
positive_sum()
//python and is && 
//python or is ||


