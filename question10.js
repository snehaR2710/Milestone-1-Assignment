// correct a bug
/**You are working on an e-commerce website where customers can add items to their cart. the cart stores the quantity of each item that the customer wants to purchase in an array of numbers. however, the website is currently experiencing a bug where the quality of each item is being recorded incorrectly by reducing it to half. as a result, you need to write a javascript function that that can double the quantity of each item in the cart array to currect the bug. */


const correctBug = (numbers) => {
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]*2);
    }
}
const array = [2, 3, 12, 10, 7, 9, 13]
correctBug(array)