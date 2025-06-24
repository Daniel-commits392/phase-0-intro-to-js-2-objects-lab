// Write your solution in this file!
const employee ={
    name : 'Garvin',
    streetAddress: 12390
};
// this function does not mutate the original object above(employee)
function updateEmployeeWithKeyAndValue(employee,key,value) {
 return {
    name :'Sam',
    streetAddress:'11 Broadway'
 }
        
};

// it directly modifies the object
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]= value
return {
 name : 'Sam',
 streetAddress:"12 Broadway",
}

};

function deleteFromEmployeeByKey(employee,key){
employee= {
    ...employee
}
delete employee.name;
return employee;
};

function  destructivelyDeleteFromEmployeeByKey(employee,key) {
   delete  employee [key] ;
return employee;
};
