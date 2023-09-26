//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array)
}

function operation(array){
  let check = false ;
  let count = 0;
  for (let i of array) {
    if (i >= 70 ){
      count = count + 1
      if (count >= 5){
        check = true;
      }
    }
  }
  return check
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,operation);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,operation);;
let scoreRoom3Result = atLeastFive(studentScoresRoom3,operation);;

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)