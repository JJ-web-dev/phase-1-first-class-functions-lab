const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (firstTwo) => [...drivers.slice(0, 2)];

const returnLastTwoDrivers = (secondTwo) => [...drivers.slice(2, 4)];


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(number) {
    return function (fare){
        return fare * number
    };
    
};

const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, twoDrivers){
   if(twoDrivers === returnFirstTwoDrivers){
       return returnFirstTwoDrivers();
   }else if (twoDrivers === returnLastTwoDrivers){
       return returnLastTwoDrivers();
   };
}; 


