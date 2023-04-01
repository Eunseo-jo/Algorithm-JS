function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        //n의 약수 중에 홀수만 count
        if((n%i === 0) && (i %2 ===1)) answer++;
    }
    return answer;
}