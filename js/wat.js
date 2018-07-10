const upperLower = function(string){
  let newString ="", newChar ="";
  for (let i=0; i < string.length; i++) {
    if (string.charAt(i) === " ") {
      newChar = " "
    } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      newChar = string.charAt(i).toLowerCase()
    } else {
      newChar = string.charAt(i).toUpperCase()
    }
   newString += newChar;
  }

  return newString;
}

console.log(upperLower("hELLO"));
