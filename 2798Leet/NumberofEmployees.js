/* 2798. Number of Employees Who Met the Target

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.

*/

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
let hours = [0,1,2,3,4];
let target = 2;
let count =0;
const numberOfEmployeesWhoMetTarget = (hours,target) =>{
    for(i in hours){
        if(hours[i]>=target){
            count+=1
        }
    }
    
return count
}
let val = numberOfEmployeesWhoMetTarget(hours,target);
console.log(val)