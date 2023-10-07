// Exercise #1: For Each Function

function forEach(array,operation) {
    newEmployeeSalaries.push(operation(array))
    }

  function addSalary(array){
    for(let i in array){
       array[i] += 5000
       console.log(array[i])
     }
     return array
    }
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,addSalary)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
