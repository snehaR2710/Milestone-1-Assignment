// Calculate the final order price
/**A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item. */

const calculateTotalCost = (cart) => {
    const totalCost = cart.reduce((acc, item) => 
        acc + (item.unitPrice * item.quantity), 0);
        
    return totalCost    
}

const customerCart = [
    {unitPrice: 15, quantity: 4},
    {unitPrice: 34, quantity: 7},
    {unitPrice: 57, quantity: 11},
    {unitPrice: 88, quantity: 34}
]

const totalCost = calculateTotalCost(customerCart)
console.log(`Total cost: RS.${totalCost}`);