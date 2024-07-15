// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Return first two drivers from the given array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Return last two drivers from the given array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Create a function that multiplies a given value by a multiplier
function createFareMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

// Double the fare
const fareDoubler = createFareMultiplier(2);

// Triple the fare
const fareTripler = createFareMultiplier(3);

// Select different drivers based on the provided function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}


