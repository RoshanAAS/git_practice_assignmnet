

//Problem 2 : Check whether a string is palindrome or not.//

let str = "madam";
let bag="";
for(let i =str.length-1;i>=0;i--){
  bag+=str[i]
}
if(bag==str){
  console.log("Yes")
}
else{
  console.log("No")
}