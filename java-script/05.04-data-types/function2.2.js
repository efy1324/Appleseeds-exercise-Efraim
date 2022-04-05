function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  let tell = "You will be a " + jobTitle + " in " + location + " and married to " + partnerName + " with " +numberOfChildren + "children";
  return tell;
}

let Efraim = tellFortune("progrremer","Jerusalem", "Anna", 0)
console.log(Efraim);
