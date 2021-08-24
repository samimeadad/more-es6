const fish = {
    id: 58,
    fishName: 'King Hilsha',
    price: 9000,
    phone: '01730795451',
    address: 'chadpur',
    dress: 'silver'
};

//Extract the value of the property of fish object with variable assignment
/* const id = fish.id;
const fishName = fish.name;
const price = fish.price;
const phone = fish.phone;
const address = fish.address;
const dress = fish.dress; */

//Extract the value of the property of fish object with Object Destructuring
const {id, fishName, price, phone, address, dress} = fish;

/* console.log( id );
console.log( fishName );
console.log( price );
console.log( phone );
console.log( address );
console.log( dress );
 */

//More Complex Case
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

/* const work = company.web.work;
const ceoName = company.ceo.name; */

const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;

console.log( work + ' & ' + framework );
console.log( food );
console.log( second + ' & ' + third );

