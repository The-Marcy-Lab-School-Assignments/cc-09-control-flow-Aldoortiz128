//1
function betweenFiveAndTen(int){
  
   
if (int <= 10 && int >= 5) {
return true; }
else {return false;}
}

//2
function betweenTenAndThirty(int){
    
if (int <=30 && int >= 10){
return true; }
else {return false;}
}

//3
function betweenThirtyAndFifty(int){
if (int <=50 && int >=30) {
return true; }
else {return false;}
}



//4
function betweenThirtyFiftySeventy(int){
if (int <=0 && int>=30 || int <=70 && int>=50) {
return true; }
else {return false;}
}


//5
function betweenTwentyFiftySixty(int){
if (int <=50 && int>=0 || int <=60 && int>=50) {
return true; }
else {return false;}
}


//6
function betweenTenTwentyThirty(int){
if (int <=20 && int>=0 || int <=30 && int>=20) {
return true; }
else {return false;}
}

console.log(betweenFiveAndTen(20))
console.log(betweenTenAndThirty(20))
console.log(betweenThirtyAndFifty(20))
console.log(betweenThirtyFiftySeventy(20))
console.log(betweenTwentyFiftySixty(20))
console.log(betweenTenTwentyThirty(20))

