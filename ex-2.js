//Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  console.log(operation(array))
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function operation(array){
  let count = 0
   for(let i in array){
   if(array[i] > 70){
    count += 1};
  }
  return count >= 5 
  }

  atLeastFive(studentScoresRoom1,operation)
  atLeastFive(studentScoresRoom2,operation)
  atLeastFive(studentScoresRoom3,operation)

let scoreRoom1Result = true;
let scoreRoom2Result = false;
let scoreRoom3Result = false;
