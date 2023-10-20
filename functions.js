function sayMyName(){
  console.log(1);
}

// sayMyName //refrence
// sayMyName() //execution

function addTwoNumbers(num1,num2){
       console.log(num1 + num2);
}
// addTwoNumbers(0,1)


// function loginuser(username = "sam"){
//   if(username === "sam"){
//     console.log("please enter a username");
//     return
//   }
//   return `${username} just logged in`
// }
// loginuser();

const myNewarray = [100,200,300,500];

function findvalue(getarray) {
   return getarray[1];
}

// console.log(findvalue(myNewarray));
console.log(findvalue([20,3000,50,90]));
