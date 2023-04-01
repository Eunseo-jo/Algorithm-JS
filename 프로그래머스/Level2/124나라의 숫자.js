function solution(n) { //124 나라의 숫자
    var answer = '';
    let remain = [];
    let quotient = n;
    let remainder = 0;
    
    while(quotient > 0){   
      remainder = quotient % 3;
      quotient = Math.floor(quotient/3);
      
      if(remainder === 0 ) {
        quotient --;
        remainder = 4;
      }
      remain.push(remainder);
    }
   
    for(let i = remain.length-1; i >= 0; i--){
      answer += remain[i].toString();
    }
    
    return answer;
}
    