// array , object

// ts - tuple

let bazarList: string[] = ["eggs", "milk", "sugar"];
bazarList.push(true);

let mixedArr: (string | number)[] = ["eggs", 14, "milk", 1, "sugar"];
mixedArr.push('faa')





let coordinates: [number, number] = [39, 44, 67];
let couple: [string, string] = ["husband", "wife"]
let destination: [string, string, number] = ["dhaka", "rajshahi", 3];





//reference type : object 

// const user: {
//     // organization: string; //we aer want to change 
//     organization: "cit is value les "; // value type. value  isn;t chang
//     //literal type
//     firstName: string;
//     middleName?: string; //optional type
//     lastName: string;
//     isMarried: boolean
// } = {
//     organization: "cit is value les ",
//     firstName: "mofazzal",
//     // middleName: "hossen",
//     lastName: "munna",
//     isMarried: true
// };


// user.organization = 'cit is value les wast my time'






const user: {
    // organization: string; //we aer want to change 
    readonly: "cit is value les "; // value type. value  isn;t chang
    //access modifier
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean
} = {
    organization: "cit is value les ",
    firstName: "mofazzal",
    // middleName: "hossen",
    lastName: "munna",
    isMarried: true
};


user.organization = 'cit is value les wast my time'
console.log(user)