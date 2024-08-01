// Promise : An object that manages asynchoronous operations.
        //    Wrap a promises object around(asynchronous code)
        //   "I promise to return a value"
        // PENDING -> RESOLVED or REJECTED
        //  new Promise((resolve,reject) => {asynchronous code})





// Using promises


let walkDog=new Promise((resolve, reject)=>{
   setTimeout(()=>{
     resolve("I Walked the dog")
   },4000)
})

let cleanKitchen =new Promise((resolve,reject)=>{
   resolve('I cleaned the kitchen');
   
},2000)



let takeTrash=new Promise((resolve,reject)=>{
    resolve('I took out the trash');         
},500)


takeTrash.then((value)=>{
       console.log(value);  
       return cleanKitchen
       
}).then((value)=>{
      console.log(value);
      return walkDog;
}).then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})







// function walkDog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('I walked the dog');
            
//         },1500)
//     })
// }

// function cleanKitchen(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('I cleaned the kitchen')
//         },1000)
//     })
// }

// function takeTrash () {
  
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('I took out the trash');
//         }, 500);
    
//     })
// }

// takeTrash().then((value)=>{
//     console.log(value);
    
// })




// takeTrash().then(value => console.log(value))


 

 








// function hi()
// {
//     console.log('hu');
    
// }

// function walkDog(callback){
//     setTimeout(()=>{
//      console.log('I walked the dog');
//         callback()
//     },1500)
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log('I cleaned the kitchen');
//         callback()
//     },2500)
// }

// function takeTrash (callback) {
//     setTimeout(() => {
//         console.log('I took out the trash');
//         callback()
//     }, 500);
// }



// // An example of callback hell

// // walkDog(()=>{
// //     cleanKitchen(()=>{
// //         takeTrash(()=>{

// //         })
// //     })
// // })

// // walkDog(()=>{
// //     hi()
// //     cleanKitchen(()=>{
// //         hi()
// //         takeTrash(()=>{
// //             hi()
// //         })
// //     })
// // })


/*
console.log('Hello');
console.log('my name is jon');


let pr =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is resolved promise")
    },2000)
})

let p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("The value was not caught"))
    },3000)
})


pr.then((value)=>{
  console.log(value);
  
},(error)=>{
  console.log(error);
  
})

p1.then((value)=>{
  console.log(value);
  
},(error)=>{
    console.log(error);
    
})

// p1.catch((value)=>{
//     console.log('Unexpected error in the database');
    
// })

// pr.then((value)=>{
//     console.log(value)
// })
*/