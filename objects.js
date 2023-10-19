const students = {
  id:1,
  name:"Hemant",
  address:"agra",
  email:"abcxyz@gmail.com",
  isLoggedin:false,
  lastLoginday:["sunday","tuesday"]
}

// console.log(students["email"]);

const obj = {1 : "a",2 : "b"}
const objtwo = {3: "a",4 : "c"}


 const obj3 = Object.assign({}, obj , objtwo)

 const obj4 = {...obj , ...objtwo}
//  console.log(obj3);
// console.log(obj4);


// console.log(Object.keys(students));
// console.log(Object.values(students));


const course = {
    coursename : "js in hindi",
    price : "2000",
    courseInstructure : "sir"
}

 const {price} = course
 
 console.log(price);
