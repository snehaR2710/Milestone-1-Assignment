// Remove Duplicates
/**In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds. */

const removeDuplicateItems = (cart) => {

    // set to store unique items
    const uniqueItems = new Set();

    // new array for the updated cart
    const newCart = []

    for(const item of cart){
        // check if the item is not in the set
        if(!uniqueItems.has(item)){
            // add the item to the set and the update cart
            uniqueItems.add(item);
            newCart.push(item)
        }
    }
    return newCart

}

const duplicateItems = ["22", 44, 17, "item2", "22", 44, "item2"]
const newCart = removeDuplicateItems(duplicateItems);
console.log(newCart);