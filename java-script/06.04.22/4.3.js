function avg(a, b, c){
  return (a + b + c) / 3;
}
let avgJON = (avg(89,120,103));
let avgmike = (avg(116, 94, 123));
let avgMary = (avg(97, 134, 105));
if (avgmike > avgJON && avgmike > avgMary){
  console.log(avgmike + "mikeeeee");
}
else if(avgMary > avgJON){ 
  console.log(avgMary);
}
else if(avgJON == avgMary == avgmike){
  console.log("stop this shit even");
}
else{
  console.log('jonnnnn');
}