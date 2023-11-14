//13. Bill splitter
/**A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

const calculateBillPerPerson = (dishCosts, numberOfPerson) => {

    // calculate the total cost of all dishes
    const totalCost = dishCosts.reduce((acc, cost) => acc + cost, 0)

    // calculate the bill per person
    const billPerPerson = totalCost / numberOfPerson;

    return {
        totalBill: totalCost,
        billPerPerson: billPerPerson

    };

}

const dishCosts = [15.25, 17.0, 25.85, 29.75, 24.5]
const numberOfPerson = 4


const billDetails = calculateBillPerPerson(dishCosts, numberOfPerson)
// console.log(billDetails);

// console.log(`Total Bill: $${billDetails.totalBill}`);
// console.log(`Bill Per Person: $${billDetails.billPerPerson}`);




