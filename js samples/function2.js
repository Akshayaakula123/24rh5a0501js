//traditional way code
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
// using arrow function code
const oddOreven=(no)=>{
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
findOddOrEven(20);
oddOreven(15);