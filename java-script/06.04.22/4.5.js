function isaLeapYear(year){
  if(year %4==0 || year%400==0 ||year%100==0){
    console.log(year + " Its a leap year");
  }
  else{
    console.log("noooooo");
  }
}
console.log(isaLeapYear(380));