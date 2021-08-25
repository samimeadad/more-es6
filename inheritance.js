class TeamMember {
    name;
    address;
    constructor ( name, address ) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    designation = 'Students Support Officer';
    groupSupportTime;
    constructor ( name, address, time ) {
        super( name, address );
        this.groupSupportTime = time;
    }
    startSession() {
        console.log( this.name, 'Start a Support Session' );
    }
}

class StudentCare extends TeamMember {
    designation = 'Students Care Officer';
    buildARoutine( student ) {
        console.log( this.name, 'Build a routine for', student );
    }
}

class NeptuneDev extends TeamMember {
    designation = 'Neptune App Developer';
    codeEditor;
    constructor ( name, address, editor ) {
        super( name, address );
        this.codeEditor = editor;
    }
    releaseApp( version ) {
        console.log( this.name, 'Release App Version: ', version );
    }
}

const sami = new Support( 'Sami Meadad', 'Uttara-Dhaka', '10:00 PM' );
console.log( sami );


const arisha = new StudentCare( 'Arishamma', 'Banasree' );
console.log( arisha );

const farmee = new NeptuneDev( 'Tasnuva Kawsar', 'Uttara', 'Android Studio' );
console.log( farmee );
farmee.releaseApp( '1.4.15' );


// console.log( arisha );
// arisha.buildARoutine( 'Arash' );
// console.log( sami );
// console.log( farmee );
// sami.startSession();
// farmee.startSession();