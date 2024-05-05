function PrintPrime(number){
    let prime=""
    for(let i=2;i<=number;i++){
        let count=0;
        for(let j=1;j<=i;j++){
            if(i%j===0){
                count++
            }
        }
        if(count<=2){
            prime+=i
            prime+=" "
        }
    }
    return(prime)
}

let arr=PrintPrime(10)
console.log(arr)