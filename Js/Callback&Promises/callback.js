// callback : a function passed as an argument to another function

/*

hello=(callback,callback2)=>{
    console.log("hi")
    callback()
    callback2()
}

goodbye=()=>{
    console.log("Goodbye")
}

leave =()=>{
    console.log('Leave');
    
}

seeYou =()=>{
    console.log('See you');
    
}

hello(seeYou,leave)

*/
// function sum(num1,num2){
//     console.log(num1+num2);
    
// }

// function calculator (callback, num1,num2){
//   callback(num1,num2)
// }

// calculator(sum,1,2)


// function sum(callback, x,y){
//     let result=x+y
//     callback(result)
// }

// function displayResult(result){
//     console.log(result)
// }

// function showResult(result){
//     document.querySelector("h1").innerHTML=result
// }

// sum(showResult,2,3)


function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 complete")
       callback()
    },2000)
}
function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 complete")
        callback()
    },3000)
}
function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 complete")
        callback()
    },1500)
}
function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 complete")
        
        callback()
    },100)
}

// ASynchronous

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log("Almost there")
//             task4(()=>{
//             console.log('Task completed');
             
             
//             })
//         })
//     })
// }) 



// Synchronous

// task1(()=>{

// })
// task2(()=>{

// })

// task3(()=>{
    
// })
// task4(()=>{

// })
