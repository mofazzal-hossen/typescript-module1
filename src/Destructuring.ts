interface User {
    id: number;
    fullName: string;
    email: string;
    city: string;
}

const user: User = {
    id: 1,
    fullName: "Munna",
    email: "munna@test.com",
    city: "Dhaka"
};

// সাধারণ নিয়ম (পুরানো):
// const name = user.fullName;

// Destructuring (আধুনিক):
const { fullName, email } = user;

console.log(fullName); // "Munna"
console.log(email);    // "munna@test.com"



////Array Destructuring

const colors: string[] = ["Red", "Green", "Blue"];

// প্রথম দুটি কালার আলাদা করছি
const [firstColor, secondColor] = colors;

console.log(firstColor);  // "Red"
console.log(secondColor); // "Green"





// Function Parameter Destructuring (প্রজেক্টে বেশি লাগে)


const showProfile = ({ fullName, city }: { fullName: string; city: string }) => {
    console.log(`${fullName} lives in ${city}`);
};

showProfile(user); // Output: Munna lives in Dhaka



//Destructuring এর সাথে Rest Operator

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(remaining); // [30, 40, 50]