// 9. Check for divisibility
/**Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
Use a for loop and continud statdmdnt. */

const divisibleBy3NotBy2 = (numbers) => {
    for(let i = 0; i< numbers.length; i++){
        const currentNumber = numbers[i]

        if(currentNumber % 3 === 0 && currentNumber % 2 !== 0){
            console.log(currentNumber)
        }else{
            continue
        }
    }
}

const array = [15, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13]
divisibleBy3(array)