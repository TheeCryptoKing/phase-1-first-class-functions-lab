// Code your solution in this file!

//1. // => ['Antonia', 'Nuru']
const returnFirstTwoDrivers = function(driver) {//take 1 argument and return last 2 drivers
    return driver.slice(0,2)

}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//quotation method and nesting array  has to be called back so wont work
//need something that can produce 2 output with 1 input with an array .slice best bet
//declaring new inner function without return didn't work
//inner callback functions arent working they keep coming back anonomyous, either doing them wrong or dont work here 

//2. // => ['Amari', 'Mo']
const returnLastTwoDrivers = function(num2) {//take 1 argument and return last 2 drivers
    return num2.slice(-2)//1 param so returning one
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]//brings back first 2 & last 2 of each and passes test 

function createFareMultiplier(multiplierValue) {//need to use original x and not second input 
    //console.log(x1)
    return function(fare) {
        //console.log(x * x)
        return fare * multiplierValue
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

/*  function selectDifferentDrivers(param1 = ['Antonia', 'Nuru', 'Amari', 'Mo'],callbackFn ) {
        if(callbackFn === returnLastTwoDrivers) {
            return param1.slice(-2)
        } else if(callbackFn === returnFirstTwoDrivers){
            return param1.slice(0,2)
        }
    }
*/
const selectDifferentDrivers = function (drivers, driversToReturn) {//Yeah we know the second paramater is a callback either returnLastTwoDrivers or returnFirstTwoDrivers

    return driversToReturn(drivers);//so we can call the paramater and pass through the array and return the value
    };
//so passing the second parameter with the array just returns the value it already worked out in the previous funtion
//we can use functions any time we want the point of functions are to be reusable with different values