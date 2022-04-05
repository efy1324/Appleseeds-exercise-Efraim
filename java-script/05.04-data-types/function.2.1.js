function describeCountry(country, population, capitalCity) {
  let describe = country + " has " + population + " million people and its capital city is " + capitalCity;
  return describe;
}


let Israel = describeCountry("Israel", 10 , "Jeruslam");
let Franch = describeCountry("Franch", 67 , "Paris");
let Itali = describeCountry("Itali", 59 , "Rome");
console.log(Israel);
console.log(Franch);
console.log(Itali);