//Scope {}

if(true){
const a = 20;
let b = 40;
var c = 80;
}
// console.log(b);
 //console.log(a);
  //console.log(c);

  let a = 30;

function scope(){
    let a = 10;
    // console.log(b);
    //console.log(a);
}
scope();
// console.log(a);


function one(){
   const username = "Hemant"

  function two(){
     const website = "Youtube"
   //  console.log(username);
  }
  //console.log(website);
  two();
}
one()

//output :Hemant



if(true){
  const username = "Hemant"
  if(username === "Hemant"){
    const website = "Linkedin"
    //console.log(username + website);
  }
 // console.log(website);
}

//console.log(username);


function add(num){
  return num + 1
}
console.log(add(5));

const addtwo = function(num){
  return num + 2
}
addtwo(3)
