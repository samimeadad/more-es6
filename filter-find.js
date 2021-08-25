const nums = [ 5, 13, 7, 41, 30, 8, 2, 19 ];
const bigNums = nums.filter( n => n > 20 )
// console.log( bigNums );

const smallNums = nums.filter( n => n < 10 )
// console.log( smallNums );

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'samrt watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
];

//Show the products which price is more than 100 taka
const expensiveProducts = products.filter( p => p.price > 100 );
// console.log( expensiveProducts );

//Show the products which price is less than 100 taka
const cheapProduct = products.filter( p => p.price < 10 );
// console.log( cheapProduct );

//Show the products which color is black
const blackProduct = products.filter( p => p.color == 'black' );
// console.log( blackProduct );


const myFriends = [ 'Sami', 'Farmee', 'Arishamma', 'Arashabba', 'Tasnuva', 'Ozair', 'Rasel', 'Hasan', 'Hussain Rubel', 'Rajib', 'Shipul', 'Wahid' ];

//It returns the friends name which lenght = 5
const firstFriendWithLengthFive = myFriends.find( name => name.length == 5 );
console.log( firstFriendWithLengthFive );