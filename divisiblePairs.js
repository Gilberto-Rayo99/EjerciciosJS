function divisibleSumPairs(n, k, ar) {
    var result=0;
    
    for(let i=0;i<n;i++) {
        for(let j=0;j<i;j++) {
        if((ar[i]+ar[j])%k===0){
            result++;
        }
    }
    }
    return result;
      
}

const ar=[1, 3, 2, 6, 1, 2];
var n=6;
var k=3;

console.log(divisibleSumPairs(n,k,ar));
