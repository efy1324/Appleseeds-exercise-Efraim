function grades(number){
  if(number <= 64){
    return 'f';
  }
  else if(number <= 69){
    return 'd';
  }
  else if(number <= 79){
    return 'c';
  }
  else if(number <= 89){
    return 'b';
  }
  else if(number <= 100){
    return 'a';
  }
}
console.log(grades(50));
console.log(grades(60));
console.log(grades(70));
console.log(grades(80));