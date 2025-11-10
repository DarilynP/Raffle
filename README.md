# 🎟️ Raffle Draw — Simple JavaScript Terminal Game

A super simple JavaScript project that randomly picks a winner from a list of participants.  
Perfect for beginners learning arrays, random numbers, and Node.js basics!

---

## 🧠 How It Works

The program:

1. Stores a list of participant names in an array.  
2. Uses `Math.random()` to generate a random number between 0 and 1.  
3. Multiplies that number by the array length to match a participant’s index.  
4. Uses `Math.floor()` to round it down to a whole number.  
5. Selects the name at that random index and displays it as the winner. 🎉

---

## 💻 Run It Yourself

### 1. Create the file
```bash
touch raffle.js
