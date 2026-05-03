//function 
// Arrow function , normal function 




function addNor(number1: number, number2: number) {
    return number1 + number2;
}

const addArr = (number1: number, number2: number,): number => number1 + number2

add(2, "2");



//object => function => method


const ric = {
    name: "munna", // 'num' এর বদলে 'name' দিলে বেশি অর্থবহ হয়
    balance: 0,

    // value এর টাইপ 'number' (ছোট হাতের)
    addBalance(value: number): number {
        // সঠিক প্রপার্টি 'this.balance' ব্যবহার করতে হবে
        this.balance = this.balance + value;
        return this.balance;
    },
};


// console.log(ric.addBalance(500)); 
// console.log(ric.addBalance(200)); 


const arr : number[]= [1,2,3];
const sqrArray = arr.map((elem: number): number=> elem*elem);







