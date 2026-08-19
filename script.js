// Welcome console message
console.log("Welcome to Niharika's Portfolio!");

// Dynamic greeting based on current hour
const header = document.querySelector("header p.subtitle");
if (header) {
    const hour = new Date().getHours();
    let greeting = "Welcome to my portfolio!";
    
    if (hour < 12) {
        greeting = "Good morning! Welcome to my portfolio.";
    } else if (hour < 18) {
        greeting = "Good afternoon! Welcome to my portfolio.";
    } else {
        greeting = "Good evening! Welcome to my portfolio.";
    }
    
    console.log(greeting);
}