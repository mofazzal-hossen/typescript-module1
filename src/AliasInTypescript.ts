//Object Type Alias
type User = {
    id: string;
    name: string;
    email: string;
};



////Union Type (Literal Type সহ)
type Status = "pending" | "success" | "failed";


//Interface/Object with Optional Properties

type Profile = {
    name: string;
    bio?: string; // এটি অপশনাল
    image?: string;
};



//Array of Objects


type Product = {
    id: number;
    title: string;
    price: number;
};

const products: Product[] = []; // এরে অফ অবজেক্ট






// ১. Type Alias তৈরি
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

const myProduct: Product = {
    id: 1,
    name: "Mechanical Keyboard",
    price: 2500,
    category: "Electronics"
};

// ৩. Destructuring ব্যবহার
const { name, price } = myProduct;
console.log(`Product: ${name}, Price: ${price} TK`);

// ৪. Spread Operator ব্যবহার (ডিসকাউন্ট যোগ করা)
const discountedProduct = { ...myProduct, discount: "10%" };
console.log(discountedProduct);





///2



const apiData = {
    id: 101,
    username: "munna_dev",
    email: "munna@example.com",
    token: "secret_access_token_123",
    role: "developer"
};

// Rest Operator দিয়ে token আলাদা করা
const { token, ...publicUserInfo } = apiData;

console.log("Public Data:", publicUserInfo); 
// এখানে token থাকবে না, বাকি সব থাকবে।