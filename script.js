/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(greaterFifty);
  function greaterFifty(students){
    if(students.marks>50){
      console.log(students);
    }
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student_details);
  function student_details(students){
  console.log(students);
  }
}

function addData() {
  //Write your code here, just console.log
  const add_student ={id:4,name:"susan",age:"20",marks:45};
  arr.push(add_student);
  arr.forEach(student_details);
  function student_details(students){
  console.log(students);
}
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(var i=0; i<arr.length; i++){
    if(arr[i].marks<50){
      arr.splice(i);
    }
  }
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  } 
}

function concatenateArray() {
  //Write your code here, just console.log
let arr1=[
  {id:5,name:"reena",age:"21",marks:54},
  {id:6,name:"tuba",age:"21",marks:43},
  {id:7,name:"gita",age:"20",marks:45},
];
for(var i=0; i<arr1.length; i++){
  arr.push(arr1[i]);
}
for(var i=0; i<arr.length; i++){
  console.log(arr[i]);
} 
}