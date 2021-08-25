//Declare variable based on the name of an object property
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68,
    c: 99,
    p: {
        q: 29
    }
};

const {x, b} = myObject;
// console.log( x, b );
// console.log( myObject?.p?.q?.r?.s );

// const [ p, q ] = [ 45, 32, 91, 86 ];
// console.log( p, q );

// const [ best, faltu ] = [ 'Farmee', 'Stuborn' ];
// console.log( best, faltu );


//Chaining
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'Ajmal',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'JavaScript'
        }
    }
};

console.log( company?.web?.tech?.third );
console.log( company.backend?.tech?.third );