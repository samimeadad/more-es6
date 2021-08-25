class Support {
    name;
    designation = 'Support Web Dev';
    address;
    constructor ( name, address ) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log( this.name, 'Start a Support Session' );
    }
}

const sami = new Support( 'Sami Meadad', 'Uttara-Dhaka' );
const farmee = new Support( 'Tasnuva Kawsar', 'Sylhet' );
// console.log( sami );
// console.log( farmee );
sami.startSession();
farmee.startSession();