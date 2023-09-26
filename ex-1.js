// Exercise #1: For Each Function

function forEach(array, operation) {
  return operation(array);
}

function operation(array){
  for (let i in array){
    array[i] = array[i] + 5000
    newEmployeeSalaries.push(array[i]);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];


// Using `forEach` function here
forEach(employeeSalaries,operation);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]