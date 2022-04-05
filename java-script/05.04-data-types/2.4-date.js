
function whichday() {
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
let numDay = d.getUTCDate();
const monthly = ["January","February","March","April","May","June","July", "August", "September","October", "November","December"];
let month = monthly[d.getMonth()];
let year = d.getFullYear();
let todayIs = `this is ${day} the ${numDay} of ${month}, ${year}`
return todayIs;
}
console.log(whichday())

 

