const ages = [21,22,23,24,25];
for(let i=0;i<ages.length ;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    
    }
}   
// Callback Function
function calculateArithematic(a,b,arithematicFunalFunction){
    const ans=arithematicFunalFunction(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}
const value = calculateArithematic(1,2,sum)
console.log(value);

// Set timeout Function
function greeting(){
    console.log("Hello How are you");
}
setTimeout(greeting,3*1000)
// Set Interval
function greet(){
    console.log("Hello");
}
setInterval(greet,1*1000)