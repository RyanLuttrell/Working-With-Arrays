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

// const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

// const gNames = names.reduce((count, name) => {
//     if (name[0] === 'G') {
//         return count+1;
//     } else {
//         return count;
//     }
// }, 0)

// console.log(gNames)

// const arr = [1,2,3];

// const smallerArr = arr
//     .filter(number => number !== 2)
//     .map(number => number + 1);

// console.log(incrementedArr);

// const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

// const unique = numbers.filter(function(number, index, array) {
//   return index === array.indexOf(number);
// });

// console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 42}
//   ];

// const newUsers = users.filter(user => user.name !== 'Samir');
// const userInfo = users.map(user => `${user.name} is ${user.age} years old.`)

// const usersObject = users.reduce((usersObject, user) => {
//     usersObject[user.name] = user.age;
//     return usersObject
// }, {})

// console.log(usersObject);

// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

// const users = userNames
//     .filter(name => name[0] === 'S')
//     .map(name => ({name}));

// console.log(users)

// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 42},
//     {name: 'Shaniqua', age: 30},
//     {name: 'Marvin', age: 23},
//     {name: 'Sean', age: 47}
//   ];

// const userNames = users
//     .filter(user => user.age >= 30)
//     .map(user => user.name);

// console.log(userNames)


// const todos = [
//     {
//         todo: 'Buy apples',
//         done: false
//     },
//     {
//         todo: 'Wash car',
//         done: true
//     },
//     {
//         todo: 'Write web app',
//         done: false
//     },
//     {
//         todo: 'Read MDN page on JavaScript arrays',
//         done: true
//     },
//     {
//         todo: 'Call mom',
//         done: false
//     }
// ];


// const products = [
//     { name: 'hard drive', price: 59.99 },
//     { name: 'lighbulbs', price: 2.59 },
//     { name: 'paper towels', price: 6.99 },
//     { name: 'flatscreen monitor', price: 159.99 },
//     { name: 'cable ties', price: 19.99 },
//     { name: 'ballpoint pens', price: 4.49 }
//   ];
  


// const total = products
//     .filter(product => product.price > 10)
//     .reduce((sum, product) => {
//         sum += product.price;
//         return sum;
//     }, 0).toFixed(2);

// console.log(total);

// const purchaseItems = [
//     {
//         name: 'apples',
//         dept: 'groceries',
//         price: 2.49
//     },
//     {
//         name: 'bread',
//         dept: 'groceries',
//         price: 2.99
//     },
//     {
//         name: 'batteries',
//         dept: 'electronics',
//         price: 5.80
//     },
//     {
//         name: 'eggs',
//         dept: 'groceries',
//         price: 3.99
//     },
//     {
//         name: 't-shirts',
//         dept: 'apparel',
//         price: 9.99
//     }
// ];
// let groceryTotal;

// // groceryTotal should be: 9.47
// // Write your code below

// groceryTotal = purchaseItems
//   .filter(item => item.dept === 'groceries')
//   .reduce((total, item) => {
//     total += item.price;
//     return total;
//   });

// console.log(groceryTotal);

// const movies = [
//     ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//     ['Finding Dory'],
//     ['Jaws', 'On the Waterfront']
//   ]
  
// const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);

// console.log(flatMovies)

      // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

    //   const users = [
    //     {
    //       name: 'Samir',
    //       age: 27,
    //       favoriteBooks:[
    //         {title: 'The Iliad'},
    //         {title: 'The Brothers Karamazov'}
    //       ]
    //     },
    //     {
    //       name: 'Angela',
    //       age: 33,
    //       favoriteBooks:[
    //         {title: 'Tenth of December'},
    //         {title: 'Cloud Atlas'},
    //         {title: 'One Hundred Years of Solitude'}
    //       ]
    //     },
    //     {
    //       name: 'Beatrice',
    //       age: 42,
    //       favoriteBooks:[
    //         {title: 'Candide'}
    //       ]
    //     }
    //   ];
      
          // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

// const books = users
//     .map(user => user.favoriteBooks.map(book => book.title))
//     .reduce((arr, titles) => [...arr, ...titles], []);

// console.log(books)