/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
let bookDay = 0;
let cost = document.getElementById("calculated-cost");
let clear = document.getElementById("clear-button");
let dailyRate = 35;
// defined week list for forEach function but don't know why it doesn't work
// let week=[mon,tue,wed,thu,fri];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function checked(){
    if (this.classList.contains("clicked")){
        this.classList.remove("clicked");
        bookDay-=1;
    } else{this.classList.add("clicked");
        bookDay+=1;}
    costCal();
}
mon.addEventListener("click",checked);
tue.addEventListener("click",checked);
wed.addEventListener("click",checked);
thu.addEventListener("click",checked);
fri.addEventListener("click",checked);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll(){
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thu.classList.remove("clicked");
    fri.classList.remove("clicked");
    //Unknown reason for not able to use forEach function here. 
    // week.forEach(()=>{this.classList.remove("clicked")})
    bookDay = 0;
    if (half.classList.contains("clicked")){
    half.classList.remove("clicked");
    full.classList.add("clicked");
    dailyRate =35; 
    }
    costCal();
}
clear.addEventListener("click",clearAll);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfbutton(){
    half.classList.add("clicked");
    full.classList.remove("clicked");
    dailyRate = 20;
    costCal();
}
half.addEventListener("click",halfbutton);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function fullbutton(){
    full.classList.add("clicked");
    half.classList.remove("clicked");
    dailyRate = 35;
    costCal();
}
full.addEventListener("click",fullbutton);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function costCal(){
    cost.innerHTML = dailyRate*bookDay;
}
