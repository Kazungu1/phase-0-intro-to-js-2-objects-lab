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