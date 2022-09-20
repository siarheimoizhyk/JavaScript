const checkAge = function(age_1){

  age_1 = Number(age_1)
 if(!isNaN(age_1)){ 
   
 if (age_1 <18) {
   console.log("You don't have accsess cause your age is "+age_1+". It's less then 18.")

}
 else if (age_1>= 18 && age_1 <60){
    console.log("Welcome!")
}
  else if (age_1> 60) {
    console.log("Keep calm and look Culture channel.")
  }else {
    console.log("Technical work.")
}
  
}else{
  console.log("Not a number") 
 }
}

checkAge(17)
checkAge(18)
checkAge(61)
checkAge("qqq")
checkAge('22')
checkAge('22aaa')


let age_1Prompt = prompt('Enter age')
checkAge(age_1Prompt)