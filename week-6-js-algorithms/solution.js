import helperMethods from "./helper.methods.js";
import fs from 'fs';

const response = JSON.parse(fs.readFileSync('./response.matches.json', 'utf-8'));


console.log(helperMethods.filterMatchesByLocationAndStatus(response)); // Returns: ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoatingAndShower(response)); // Returns: ["10-015"]
console.log(helperMethods.filterMatchesByLocationAndPrice(response)); // Returns: ["10-015"]
console.log(helperMethods.filterMatchesByCreatorFeeAndStatus(response)); // Returns: ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoveringAndDressingRoom(response)); // Returns: ["10-016"]