// Code your solution here
// let totalBatteries = [4, 5, 3, 4, 4, 6, 5];
 
let batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);