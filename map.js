const numbers = [ 4, 6, 8, 10 ];
// const output = [];


//Normal Function
/* function doubleOld( number ) {
    return number * 2);
} */

//Arrow Function
// const doubleIt = number => number * 2;
const doubleIt = x => x * 2;

/* for ( const number of numbers ) {
    const result = doubleIt( number );
    output.push( result );
}
console.log( output ); */

//What it will do
//1. Loop thorough each array element.
//2. For each element of the array call the provided function doubleIt().
//3. Result for each element will be stored in another array output[].

//with map() method. Only one line approach.
// const output = numbers.map( doubleIt );
const output = numbers.map( x => x * 2 );
console.log( 'Double: ', ...output );

const square = numbers.map( x => x * x );
console.log( 'Square: ', ...square );

//What map() will do
//1. Loop thorough each array element.
//2. For each element of the array call the provided function doubleIt().
//3. Result for each element will be stored in another array output[].