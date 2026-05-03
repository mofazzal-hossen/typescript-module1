//?=: ternary opearator : decision making 
// ?? : nullish coalescing opearator  : null/ undefined 
// ?. optional chaining




// optional chaining


const user = {
    name: "Munna",
    // ঠিকানা নেই (address: null or undefined)
};

// ভুল উপায়: console.log(user.address.city); -> Error! কোড থেমে যাবে।

// সঠিক উপায়:
console.log(user?.address?.city);
// আউটপুট: undefined (কোড ক্র্যাশ করবে না)




////২. Nullish Coalescing (??)

const dbName = null;

// যদি dbName নাল হয়, তবে "Guest" নাও
const displayName = dbName ?? "Guest User";

console.log(displayName); // আউটপুট: Guest User


//Ternary Operator

const isLoggedIn = true;

const buttonText = isLoggedIn ? "Logout" : "Login";

console.log(buttonText); // আউটপুট: Logout




//    real cas

const apiResponse = {
    profile: {
        name: "Munna",
        // age: 25 (ধরি এই ডাটা আসেনি)
    }
};

// ১. Optional chaining দিয়ে ডাটা চেক করছি
// ২. Nullish coalescing দিয়ে ডিফল্ট ভ্যালু দিচ্ছি
const userAge = apiResponse?.profile?.age ?? "Not Provided";

// ৩. Ternary দিয়ে একটি স্ট্যাটাস মেসেজ দিচ্ছি
const canVote = (typeof userAge === 'number' && userAge >= 18) ? "Yes" : "No";

console.log(`Age: ${userAge}`); // Age: Not Provided
console.log(`Can Vote: ${canVote}`); // Can Vote: No




