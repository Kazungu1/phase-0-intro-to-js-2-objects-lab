// Write your solution in this file!
const employee ={
    name: 'Kazungu',
    streetAddress: 'Umoja 3',
};
function updateEmployeeWithKeyAndValue(employee,key,value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name = 'Sam';
    employee.streetAddress ='12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const updatedEmployee ={...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee};
    delete employee[key];
    return employee;

}