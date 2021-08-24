//Declare variable based on the name of an object property
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68,
    c: 99
};

const {x, b} = myObject;
console.log( x, b );
console.log( 'myObject.p.q', myObject?.p?.q );