import helperMethods from "./helper.methods.js";
import response from './api.response.js';

console.log(helperMethods.getUsersByAge(response, 30, 40)); // [ Alice, Eva, Frank, Henry, Karon ]
console.log(helperMethods.getUsersByRole(response, 'admin')); // [ Alice, Eva, Henry ]
console.log(helperMethods.getUsersByCountry(response, 'USA')); // [ Alice, David, Henry ]
console.log(helperMethods.getUsersByBalance(response, 1100, 2000)); // [ David ]