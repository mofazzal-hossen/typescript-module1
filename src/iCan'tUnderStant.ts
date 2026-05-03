let myName: string | null = null; // শুরুতে নাল (খালি)
myName = "Munna"; // পরে নাম আসলো



let gift: unknown = "Watch";

// সরাসরি ব্যবহার করা যাবে না:
// console.log(gift.toUpperCase()); // Error দিবে

// আগে চেক করতে হবে:
if (typeof gift === "string") {
    console.log(gift.toUpperCase()); // এখন সঠিক
}


function stopEverything(): never {
    throw new Error("সব বন্ধ!"); // ফাংশনটি এখানেই শেষ, কিছু রিটার্ন করার সুযোগ নেই।
}