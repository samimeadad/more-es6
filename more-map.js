const friends = [ 'Farmee', 'Arishamma', 'Aarash', 'Ammapakhi' ];
const itemLength = friends.map( friend => friend.length );
// console.log( itemLength );

//Array containing Objects
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'samrt watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
];

const productName = products.map( product => product.name );
console.log( productName );

const productPrice = products.map( p => p.price );
console.log( productPrice );
/* for ( const price of productPrice ) {
    if ( price < 100 ) {
        console.log( price );
    }
} */


//Use of forEach
products.forEach( product => console.log( product.color ) );