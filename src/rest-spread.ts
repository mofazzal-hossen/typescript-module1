
const friends = ["Munna", "Rifat", "Sakib", "Tamim", "Javed"];

// প্রথম জন 'bestFriend', বাকি সবাই 'otherFriends'
const [bestFriend, ...otherFriends] = friends;

console.log(bestFriend);   // "Munna"
console.log(otherFriends); // ["Rifat", "Sakib", "Tamim", "Javed"]



// এখানে ...numbers হলো Rest Operator



const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

console.log(sumAll(10, 20));
console.log(sumAll(10, 20, 30, 40));



const user = {
    id: 101,
    userName: "Munna",
    email: "munna@example.com",
    city: "Dhaka"
};



const { id, ...info } = user;

console.log(id);
console.log(info); 




type Product = { id: number; name: string; price: number };

const cart: Product[] = [
    { id: 1, name: "Keyboard", price: 1200 },
    { id: 2, name: "Mouse", price: 800 }
];

const newProduct: Product = { id: 3, name: "Monitor", price: 15000 };


const updatedCart = [...cart, newProduct];

console.log(updatedCart);


///

const databaseUser = {
    uid: "user123",
    name: "Munna",
    email: "munna@example.com",
    password: "secretPassword123", // এটি সিক্রেট
    role: "admin"
};

// password আলাদা করে বাকি সব 'publicData' ভেরিয়েবলে জমা হবে
const { password, ...publicData } = databaseUser;

console.log(publicData); 







function sendNotification(message: string, ...userIds: string[]) {
    userIds.forEach(id => {
        console.log(`Sending "${message}" to User ID: ${id}`);
    });
}

// আপনি চাইলে ২ জন বা ১০০ জন ইউজারকে পাঠাতে পারেন
sendNotification("Your order is shipped!", "user_01", "user_05", "user_09");