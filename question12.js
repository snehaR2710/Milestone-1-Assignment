// Calculate rental cost
/**A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. they require a function that takes in the number of days rented and car type and return the rental cost. the total cost would be the rental cost multiplied by the number of days rented.
 * the rental cost are:
 * Economy = RS.4000 /-per day.
 * Midsize = RS.10,000 -per day.
 * Luxury = RS.20,000 -per day.
 */

const calculateRentCost = (dayRented, carType) =>{
    // rental cost for each car type
    const dailyRates = {
        economy: 4000,
        midsize: 10000,
        luxury: 20000
    }

    // condition to check providede car type is valid 
    if(dailyRates.hasOwnProperty(carType)){

        // caculate the total rental cost 
        const rentalCost = dailyRates[carType] * dayRented;
        return rentalCost
    }else{
        return "Invalid car type, Please select provided car type"
    }
}

const dayRented = 6;
const carType = 'luxury'
const totalCost = calculateRentCost(dayRented, carType)

console.log(`Total rental cost for ${dayRented} days of ${carType} car: RS.${totalCost}`);