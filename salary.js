// Create a form to ask 2 questions - How many hours per Week - How much money per hour * 52 weeks
// Create variable for hours
let hours;
//Create Variable for hourlyRate

//create a multiplication formula to multiply the 2 inputs and  add bonus to the product
function findSalary(hourlyRate, hours) {
    let hours = prompt("How many hours per week?");
    let hourlyRate = prompt("Whatis the hourly rate?");
    let bonus = prompt("Is there a signing bonus? If so, how much?");
    let salary = (hourlyRate*hours)+bonus;
    return salary;
}

findSalary(hourlyRate, hours),