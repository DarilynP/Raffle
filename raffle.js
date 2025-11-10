const participants = ["Darilyn","Alex","jordan","maya","sam","Taylor","chris","riley"];

const randomIndex = Math.floor(Math.random() * participants.length);
const winner = participants[randomIndex];

console.log("🎰 Drawing a winner...");
console.log(`🎉 The winner is: ${winner}! 🎉`);