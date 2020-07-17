// const prices = [6.75, 3.10, 4.00, 8.12];

// let totalPrice = 0;

// prices.forEach(price => {
//     totalPrice += price;
// });

// console.log(totalPrice);


// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// const startsWithS = name => name.charAt(0) === 'S';
// const sNames = names.filter(startsWithS);

// console.log(sNames);

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

// const strings = [1,2,3,4,5,6,7,8,9,10];
// const numbers = strings.map(string => parseInt(string, 10));
// console.log(numbers);

// const fruits = ['apple', 'pear', 'cherry'];

// let capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(capitalizedFruits);

// const prices = [5, 4.23, 6.4, 8.09, 3.20];
// const priceToDollars = price => `$${price.toFixed(2)}`
// const displayPrices = prices.map(priceToDollars);
// console.log(displayPrices);

// const sumTotal = prices.reduce((sum, price) => sum + price, 0)
// console.log(sumTotal);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gNames = names.reduce((count, name) => {
    if (name[0] === 'G') {
        return count+1;
    } else {
        return count;
    }
}, 0)

console.log(gNames)